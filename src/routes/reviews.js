"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ReviewsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get("/", this.getReviews);
        this.router.get("/product/:productId", this.getProductReviews);
    }
    getReviews(_req, res) {
        res.status(200).send({
            message: "Hello from reviews route",
            data: [],
        });
    }
    getProductReviews(req, res) {
        res.status(200).send({
            id: 1,
            productId: req.params.productId,
            images: [],
            rating: 4.5,
            comment: "Great product",
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new ReviewsRoutes().getRouter();