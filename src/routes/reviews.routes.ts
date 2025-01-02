import { Router } from "express";
import reviewsController from "../controllers/reviews.controller";

class ReviewsRoutes {
  private readonly router: Router;
  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get("/", reviewsController.getReviews);
    this.router.get("/product/:productId", reviewsController.getProductReviews);
    this.router.get("/user/:userId", reviewsController.getUserReviews);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new ReviewsRoutes().getRouter();
