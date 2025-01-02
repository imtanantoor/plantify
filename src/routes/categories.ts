import { Router } from "express";
import categoriesController from "../controllers/categories.controller";
    
class CategoryRouter {
 private readonly router: Router;

 constructor() {
  this.router = Router();
  this.setupRoutes();
 }

 private setupRoutes(): void {
  this.router.get("/:id", categoriesController.getCategory);
  this.router.get("/", categoriesController.getCategories);
 }

 public getRouter(): Router {
  return this.router;
 }
}

export default new CategoryRouter().getRouter();
