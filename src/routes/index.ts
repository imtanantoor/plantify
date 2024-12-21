import { Router } from "express";
import productRoutes from "./products";
import categoryRoutes from "./categories";
import tagRoutes from "./tags";
import userRoutes from "./user";
import reviewsRoutes from "./reviews";
class AppRouter {
 private router: Router;

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
