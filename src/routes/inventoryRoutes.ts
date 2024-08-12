import { Router, Request, Response } from "express";
import { InventoryController } from "../controllers/inventoryController";

const router = Router();
const inventoryController = new InventoryController();

router.post("/inventories", (req: Request, res: Response) => {
  inventoryController.addItemToInventory(req, res);
});

router.get("/inventories", (_req: Request, res: Response) => {
  inventoryController.getInventories(_req, res);
});

router.get("/inventories/:id", (_req: Request, res: Response) => {
  inventoryController.getInventoryItemById(_req, res);
});

router.put("/inventories/:id", (req: Request, res: Response) => {
  inventoryController.updateInventory(req, res);
});

router.delete("/inventories/:id", (req: Request, res: Response) => {
  inventoryController.deleteInventory(req, res);
});

export default router;
