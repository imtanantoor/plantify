import { Router } from "express";
import productsController from "../controllers/products.controller";

class ProductRouter {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get("/:id", productsController.getProduct);
    this.router.get("/", productsController.getProducts);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new ProductRouter().getRouter();
