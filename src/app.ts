
import express from "express";
import constants from "./utils/constants";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(cors({ origin: "*" }));

app.get("/", (_req, res) => {
  res.status(200).send({ message: "Hello" });
});

export default app