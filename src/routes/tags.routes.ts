import { Router } from "express";
import tagsController from "../controllers/tags.controller";

class TagsRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router
      .get("/", tagsController.getTags)
      .post("/", tagsController.createTag);
    this.router.get("/:id", tagsController.getTag);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new TagsRoutes().getRouter();
