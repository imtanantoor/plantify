import { Request, Response, Router } from "express";

class TagsRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get("/", this.getTags);
    this.router.get("/:id", this.getTag);
  }

  private getTags(_req: Request, res: Response): void {
    res.status(200).send({ message: "Hello from tag route", data: [] });
  }

  private getTag(req: Request, res: Response) {
    res.status(200).send({
      data: {
        id: req.params.id,
        name: "Some tag",
        description: "some description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new TagsRoutes().getRouter();
