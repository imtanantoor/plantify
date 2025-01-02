import { Request, Response } from "express";
import { Tags } from "../models";

class TagsController {
  async getTags(req: Request, res: Response): Promise<void> {
    try {
      const tags = await Tags.findMany();
      res.status(200).send({
        message: "Tags fetched",
        data: tags,
      });
    } catch (error) {
      res.status(500).send({
        message: "Error fetching tags",
        error: error,
      });
    }
  }

  async getTag(req: Request, res: Response): Promise<void> {
    try {
      const tag = await Tags.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).send({
        message: "Tag fetched",
        data: tag,
        updatedAt: new Date(),
      });
    } catch (error) {
      res.status(500).send({
        message: "Error fetching tag",
        error: error,
      });
    }
  }

  async createTag(req: Request, res: Response): Promise<void> {
    try {
      const tag = await Tags.create({
        data: req.body,
      });
      res.status(200).send({
        message: "Tag created",
        data: tag,
      });
    } catch (error) {
      res.status(500).send({
        message: "Error creating tag",
        error: error,
      });
    }
  }

  async deleteTag(req: Request, res: Response): Promise<void> {
    try {
      await Tags.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(200).send({
        message: "Tag deleted",
      });
    } catch (error) {
      res.status(500).send({
        message: "Error deleting tag",
        error: error,
      });
    }
  }
}

export default new TagsController();
