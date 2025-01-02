import { Router } from "express";
import productRoutes from "./products.routes";
import categoryRoutes from "./categories.routes";
import tagRoutes from "./tags.routes";
import userRoutes from "./user.routes";
import reviewsRoutes from "./reviews.routes";

class AppRouter {
 private readonly router: Router;

 constructor() {
  this.router = Router();
  this.setupRoutes();
 }

 private setupRoutes(): void {
  this.router.use("/products", productRoutes);
  this.router.use("/categories", categoryRoutes);
  this.router.use("/tags", tagRoutes);
  this.router.use("/users", userRoutes);
  this.router.use("/reviews", reviewsRoutes);
 }

 public getRouter(): Router {
  return this.router;
 }
}

export default new AppRouter().getRouter();
