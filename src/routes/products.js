"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get("/:id", this.getProduct);
        this.router.get("/", this.getProducts);
    }
    getProduct(req, res) {
        res.status(200).send({
            message: "Hello from product route",
            data: {
                id: req.params.id,
                name: "Some product",
                description: "some description",
                price: 100,
                stock: 10,
                images: [],
                reviews: [],
                categories: [],
                tags: [],
            },
        });
    }
    getProducts(_req, res) {
        res.status(200).send({ message: "Hello from product route" });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new ProductRouter().getRouter();
