import { Request, Response } from "express";
import { Customers } from "../models";

class CustomerController {
  async getCustomers(_req: Request, res: Response): Promise<void> {
    try {
      const customers = await Customers.findMany();
      res.status(200).send({ customers });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async getCustomer(req: Request, res: Response): Promise<void> {
    try {
      const customer = await Customers.findUnique({
        where: { id: parseInt(req.params.id) },
      });

      if (!customer) {
        res.status(404).send({ message: "Customer not found" });
        return;
      }

      res.status(200).send({ customer });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  async createCustomer(req: Request, res: Response): Promise<void> {
    try {
      const customer = await Customers.create({ data: req.body });
      res.status(201).send({ customer });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}

export default new CustomerController();
