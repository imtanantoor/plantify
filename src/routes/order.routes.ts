import { Router } from "express";
import ordersController from "../controllers/orders.controller";

class OrderRoutes {
  private readonly router: Router;
  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get("/", ordersController.getOrders);
    this.router.get("/:id", ordersController.getOrderById);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new OrderRoutes().getRouter();
