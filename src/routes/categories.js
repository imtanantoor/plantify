"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CategoryRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get("/:id", this.getCategory);
        this.router.get("/", this.getCategories);
    }
    getCategory(req, res) {
        res.status(200).send({
            message: "Hello from category route",
            data: { id: req.params.id, name: "yo" },
        });
    }
    getCategories(_req, res) {
        res.status(200).send({
            message: "Hello from category route",
            data: [{ name: "Outdoor plants", id: 1 }],
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new CategoryRouter().getRouter();
