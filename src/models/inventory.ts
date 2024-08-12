import { Schema, model, Document } from "mongoose";

export interface Inventory extends Document {
  name: string;
  quantity: number;
  price: number;
}

const inventorySchema = new Schema<Inventory>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

export const Inventory = model<Inventory>("Inventory", inventorySchema);
