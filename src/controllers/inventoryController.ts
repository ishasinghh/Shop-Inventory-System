import { Request, Response } from "express";
import { InventoryService } from "../services/inventoryService";
import { sendErrorResponse, sendSuccessResponse } from "../utils/response";
import { Inventory } from "../models/inventory";

export class InventoryController {
  private inventoryService: InventoryService = new InventoryService();
  public async addItemToInventory(req: Request, res: Response): Promise<any> {
    try {
      const { name, quantity, price } = req.body;
      const result = await this.inventoryService.addItemToInventory(
        name,
        quantity,
        price
      );
      sendSuccessResponse(res, 201, result);
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }

  public async getInventories(_req: Request, res: Response): Promise<void> {
    try {
      const inventories = await this.inventoryService.getAllInventories();
      sendSuccessResponse(res, 200, inventories);
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }

  public async getInventoryItemById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const inventory = await this.inventoryService.getInventoryItemById(id);
      if (inventory) {
        sendSuccessResponse(res, 200, inventory);
      } else {
        sendErrorResponse(res, 500, "Failed to fetch the inventory.");
      }
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }

  public async updateInventory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body as Partial<Inventory>;
      const updatedInventory = await this.inventoryService.updateInventory(
        id,
        updateData
      );
      if (updatedInventory) {
        sendSuccessResponse(res, 200, updatedInventory);
      } else {
        sendErrorResponse(res, 404, "inventory updation failed");
      }
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }

  public async deleteInventory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedInventory = await this.inventoryService.deleteInventory(id);
      if (deletedInventory) {
        sendSuccessResponse(res, 200, deletedInventory);
      } else {
        sendErrorResponse(res, 404, "Error during deleteing inventory.");
      }
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }
}
