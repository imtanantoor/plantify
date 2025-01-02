import { Request, Response } from "express";

class ReviewsController {
  async getReviews(req: Request, res: Response): Promise<void> {
    res.status(200).send({ message: "Hello from review route" });
  }

  async getProductReviews(req: Request, res: Response): Promise<void> {
    res.status(200).send({ message: "Hello from product review route" });
  }

  async getUserReviews(req: Request, res: Response) {
    res.status(200).send({
      userId: req.params.userId,
      reviews: [
        {
          id: 1,
          productId: 1,
          images: [],
          rating: 4.5,
          comment: "Great product",
          reviewerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          productId: 2,
          images: [],
          rating: 4.5,
          comment: "Great product",
          reviewerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    });
  }
}

export default new ReviewsController();
