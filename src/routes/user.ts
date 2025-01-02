import { Router } from "express";
import userController from "../controllers/user.controller";

class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get("/:id", userController.getUser);
    this.router.get("/", userController.getUsers);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new UserRouter().getRouter();
