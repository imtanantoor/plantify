"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("./products"));
const categories_1 = __importDefault(require("./categories"));
const tags_1 = __importDefault(require("./tags"));
const user_1 = __importDefault(require("./user"));
class AppRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.use("/products", products_1.default);
        this.router.use("/categories", categories_1.default);
        this.router.use("/tags", tags_1.default);
        this.router.use("/users", user_1.default);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new AppRouter().getRouter();
