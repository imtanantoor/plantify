import { Request, Response } from "express";
import { Review } from "../models";
class ReviewsController {
  async getReviews(req: Request, res: Response): Promise<void> {
    try {
      const reviews = await Review.findMany();
      res.status(200).send({ data: reviews });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async getProductReviews(req: Request, res: Response): Promise<void> {
    try {
      const reviews = await Review.findMany({
        where: {
          productId: parseInt(req.params.productId),
        },
      });
      res.status(200).send({ data: reviews });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async getUserReviews(req: Request, res: Response) {
    try {
      const reviews = await Review.findMany({
        where: {
          customerId: parseInt(req.params.userId),
        },
      });
      res.status(200).send({ data: reviews });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}

export default new ReviewsController();
