import { Router, Request, Response } from "express";

class ProductRouter {
 private router: Router;

 constructor() {
  this.router = Router();
  this.setupRoutes();
 }

 private setupRoutes(): void {
  this.router.get("/:id", this.getProduct);
  this.router.get("/", this.getProducts);
 }

 private getProduct(req: Request, res: Response): void {
  res
   .status(200)
   .send({ message: "Hello from product route", data: { id: req.params.id } });
 }

 private getProducts(_req: Request, res: Response): void {
  res.status(200).send({ message: "Hello from product route" });
 }

 public getRouter(): Router {
  return this.router;
 }
}

export default new ProductRouter().getRouter();
