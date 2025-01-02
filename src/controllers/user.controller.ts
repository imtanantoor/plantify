import { Request, Response } from "express";

class UserController {
  constructor() {}

  async getUsers(_req: Request, res: Response): Promise<void> {
    res.status(200).send({ message: "Hello from user route" });
  }

  async getUser(req: Request, res: Response): Promise<void> {
    res.status(200).send({
      data: {
        id: req.params.id,
        name: "John Doe",
        role: "user",
        email: "john@doe.com",
        phone: "1234567890",
        address: "1234567890",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "USA",
        createdAt: new Date(),
        updatedAt: new Date(),
        orders: [],
      },
    });
  }
}

export default new UserController();
