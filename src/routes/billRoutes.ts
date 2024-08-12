import { Router, Request, Response } from "express";
import { BillController } from "../controllers/billController";

const router = Router();
const billController = new BillController();

router.post("/bills", (req: Request, res: Response) => {
  billController.createBill(req, res);
});

router.get("/bills", (_req: Request, res: Response) => {
  billController.getBills(_req, res);
});

router.get("/bills/:id", (req: Request, res: Response) => {
  billController.getBillById(req, res);
});

export default router;
