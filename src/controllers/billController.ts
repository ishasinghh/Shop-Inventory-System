import { Request, Response } from "express";
import { BillItem } from "../models/bill";
import { BillService } from "../services/billService";
import { sendErrorResponse, sendSuccessResponse } from "../utils/response";

export class BillController {
  billService: BillService = new BillService();
  public async createBill(req: Request, res: Response): Promise<any> {
    try {
      const items = req.body.items as BillItem[]; // Expected to be an array of { itemId, quantity }
      const newBill = await this.billService.createBill(items);
      sendSuccessResponse(res, 201, newBill);
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }

  public async getBills(_req: Request, res: Response): Promise<any> {
    try {
      const bills = await this.billService.getAllBills();
      sendSuccessResponse(res, 200, bills);
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }

  public async getBillById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const bill = await this.billService.getBillById(id);
      if (bill) {
        sendSuccessResponse(res, 200, bill);
      } else {
        sendErrorResponse(res, 500, "Failed to fetch the bill.");
      }
    } catch (error) {
      sendErrorResponse(res, 500, error.message);
    }
  }
}
