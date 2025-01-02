import { Request, Response } from "express";
import { Orders } from "../models";

class OrdersController {
  public async getOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await Orders.findMany();
      res.status(200).send({ orders });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  public async getOrderById(req: Request, res: Response): Promise<void> {
    try {
      const order = await Orders.findUnique({
        where: { id: parseInt(req.params.id) },
      });

      if (!order) {
        res.status(404).send({ message: "Order not found" });
        return;
      }

      res.status(200).send({ order });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}

export default new OrdersController();
