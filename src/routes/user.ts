import { Router, Request, Response } from "express";

class UserRouter {
 private router: Router;

 constructor() {
  this.router = Router();
  this.setupRoutes();
 }

 private setupRoutes(): void {
  this.router.get("/:id", this.getUser);
  this.router.get("/", this.getUsers);
 }

 private getUsers(_req: Request, res: Response): void {
  res.status(200).send({ message: "Hello from user route" });
 }

 private getUser(req: Request, res: Response): void {
  res.status(200).send({
   data: {
    id: req.params.id,
    name: "John Doe",
    role: "user",
    email: "john@doe.com",
    phone: "1234567890",
    address: "1234567890",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    createdAt: new Date(),
    updatedAt: new Date(),
    orders: [],
   },
  });
 }

 public getRouter(): Router {
  return this.router;
 }
}

export default new UserRouter().getRouter();
