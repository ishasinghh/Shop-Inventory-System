import { Inventory } from "../models/inventory";

export class InventoryService {
  public async addItemToInventory(
    name: string,
    quantity: number,
    price: number
  ): Promise<any> {
    const newInventory = await new Inventory({ name, quantity, price }).save();
    return {
      id: newInventory._id,
      name: newInventory.name,
      quantity: newInventory.quantity,
      price: newInventory.price,
    };
  }

  public async getAllInventories(): Promise<any> {
    const inventories = await Inventory.find();
    return inventories.map((inventory) => ({
      id: inventory._id,
      name: inventory.name,
      quantity: inventory.quantity,
      price: inventory.price,
    }));
  }

  public async getInventoryItemById(id: string): Promise<any> {
    const inventory = await Inventory.findById(id);
    if (!inventory) {
      throw new Error("Inventory not found");
    }

    return {
      id: inventory._id,
      name: inventory.name,
      quantity: inventory.quantity,
      price: inventory.price,
    };
  }

  public async updateInventory(
    id: string,
    updateData: Partial<Inventory>
  ): Promise<any> {
    const updatedInventory = await Inventory.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedInventory) {
      throw new Error("Inventory item not found");
    }

    return {
      id: updatedInventory._id,
      name: updatedInventory.name,
      quantity: updatedInventory.quantity,
      price: updatedInventory.price,
    };
  }

  public async deleteInventory(id: string): Promise<any> {
    const deletedInventory = await Inventory.findByIdAndDelete(id);

    if (!deletedInventory) {
      throw new Error("Inventory item not found");
    }

    return {
      id: deletedInventory._id,
    };
  }
}
