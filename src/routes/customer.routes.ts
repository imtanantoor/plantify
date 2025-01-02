import { Router } from "express";
import customerController from "../controllers/customer.controller";

class CustomerRouter {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router
      .get("/:id", customerController.getCustomer)
      .post("/", customerController.createCustomer);
    this.router.get("/", customerController.getCustomers);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new CustomerRouter().getRouter();
