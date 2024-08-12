import { Schema, model, Document } from "mongoose";

export interface BillItem {
  itemId: Schema.Types.ObjectId;
  quantity: number;
}

interface Bill extends Document {
  items: BillItem[];
  totalAmount: number;
}
const billItemSchema = new Schema(
  {
    itemId: { type: Schema.Types.ObjectId, ref: "Inventory", required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const billSchema = new Schema<Bill>({
  items: [billItemSchema],
  totalAmount: { type: Number, required: true },
});

export default model<Bill>("Bill", billSchema);
