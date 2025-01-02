import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import indexRoutes from "./routes";

class App {
 private readonly app: Application;

 constructor() {
  this.app = express();
  this.setupMiddleware();
  this.setupRoutes();
 }

 private setupMiddleware(): void {
  this.app.use(express.json({ limit: "50mb" }));
  this.app.use(helmet());
  this.app.use(cors({ origin: "*" }));
  this.app.use("/v1", indexRoutes);
 }

 private setupRoutes(): void {
  this.app.get("/", (_req: Request, res: Response) => {
   res.status(200).send({ message: "Hello World" });
  });
 }

 public getApp(): Application {
  return this.app;
 }
}

export default new App().getApp();
