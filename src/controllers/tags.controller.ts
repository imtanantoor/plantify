import { Request, Response } from "express";

class TagsController {
  constructor() {}

  async getTags(req: Request, res: Response) {
    res.status(200).send({ message: "Hello from tag route", data: [] });
  }

  async getTag(req: Request, res: Response) {
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
}

export default new TagsController();