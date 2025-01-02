import { Request, Response } from "express";
import { Categories } from "../models";

class CategoriesController {
  async getCategory(req: Request, res: Response): Promise<void> {
    const category = await Categories.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!category) {
      res.status(404).send({
        message: "Category not found",
      });
      return;
    }

    res.status(200).send({
      message: "Hello from category route",
      data: category,
    });
  }
  
  async getCategories(req: Request, res: Response): Promise<void> {
    const categories = await Categories.findMany();
    
    if (categories.length === 0) {
      res.status(404).send({
        message: "Categories not found",
      });
      return;
    }
    res.status(200).send({
      message: "Hello from category route",
      data: categories,
    });
  }
}

export default new CategoriesController();
