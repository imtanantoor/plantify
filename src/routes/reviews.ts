import { Request, Response, Router } from "express";

class ReviewsRoutes {
  private readonly router: Router;
  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get("/", this.getReviews);
    this.router.get("/product/:productId", this.getProductReviews);
  }

  private getReviews(_req: Request, res: Response): void {
    res.status(200).send({
      message: "Hello from reviews route",
      data: [],
    });
  }

  private getProductReviews(req: Request, res: Response) {
    res.status(200).send({
      id: 1,
      productId: req.params.productId,
      images: [],
      rating: 4.5,
      comment: "Great product",
      reviewerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new ReviewsRoutes().getRouter();
