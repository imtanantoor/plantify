import { Request, Response } from "express";

class CategoriesController {
  async getCategory(req: Request, res: Response): Promise<void> {
    res.status(200).send({
      message: "Hello from category route",
      data: { id: req.params.id, name: "yo" },
    });
  }
  async getCategories(req: Request, res: Response): Promise<void> {
    res.status(200).send({
      message: "Hello from category route",
      data: [{ name: "Outdoor plants", id: 1 }],
    });
  }
}

export default new CategoriesController();
