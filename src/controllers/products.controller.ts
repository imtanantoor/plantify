import { Request, Response } from "express";
import { Products } from "../models";

class ProductsController {
  async getProduct(req: Request, res: Response): Promise<void> {
    res.status(200).send({
      message: "Hello from product route",
      data: {
        id: req.params.id,
        name: "Some product",
        description: "some description",
        price: 100,
        stock: 10,
        images: [],
        reviews: [],
        categories: [],
        tags: [],
      },
    });
  }
  async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await Products.findMany({
        take: 10,
        skip: 0,
      });
      res.status(200).send({
        message: "Products fetched successfully",
        data: products,
      });
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        error: error,
      });
    }
  }
}

export default new ProductsController();
