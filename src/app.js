"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setupMiddleware();
        this.setupRoutes();
    }
    setupMiddleware() {
        this.app.use(express_1.default.json({ limit: "50mb" }));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)({ origin: "*" }));
        this.app.use("/v1", routes_1.default);
    }
    setupRoutes() {
        this.app.get("/", (_req, res) => {
            res.status(200).send({ message: "Hello" });
        });
    }
    getApp() {
        return this.app;
    }
}
exports.default = new App().getApp();
