import Bill, { BillItem } from "../models/bill";
import { Inventory } from "../models/inventory";

export class BillService {
  public async createBill(items: BillItem[]): Promise<any> {
    let totalAmount = 0;

    for (const { itemId, quantity } of items) {
      const inventoryItem = await Inventory.findById(itemId);
      if (!inventoryItem || inventoryItem.quantity < quantity) {
        throw new Error(`Insufficient stock for item with ID ${itemId}`);
      }
      totalAmount += inventoryItem.price * quantity;
    }

    const newBill = await new Bill({ items, totalAmount }).save();

    for (const { itemId, quantity } of items) {
      await Inventory.findByIdAndUpdate(
        itemId,
        { $inc: { quantity: -quantity } },
        { new: true }
      );
    }

    return newBill;
  }

  public async getAllBills(): Promise<any> {
    return await Bill.find().populate("items.itemId");
  }

  public async getBillById(id: string): Promise<any> {
    return await Bill.findById(id).populate("items.itemId");
  }
}

const billService = new BillService();
export default billService;
