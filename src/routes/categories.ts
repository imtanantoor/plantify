import { Router, Request, Response } from "express";

class CategoryRouter {
 private router: Router;

 constructor() {
  this.router = Router();
  this.setupRoutes();
 }

 private setupRoutes(): void {
  this.router.get("/:id", this.getCategory);
  this.router.get("/", this.getCategories);
 }

 private getCategory(req: Request, res: Response): void {
  res.status(200).send({
   message: "Hello from category route",
   data: { id: req.params.id, name: "yo" },
  });
 }

 private getCategories(_req: Request, res: Response): void {
  res.status(200).send({
   message: "Hello from category route",
   data: [{ name: "Outdoor plants", id: 1 }],
  });
 }

 public getRouter(): Router {
  return this.router;
 }
}

export default new CategoryRouter().getRouter();
