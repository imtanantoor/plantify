import { Request, Response } from "express";

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
    res.status(200).send({ message: "Hello from product route" });
  }
}

export default new ProductsController();
