"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get("/:id", this.getUser);
        this.router.get("/", this.getUsers);
    }
    getUsers(_req, res) {
        res.status(200).send({ message: "Hello from user route" });
    }
    getUser(req, res) {
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
    getRouter() {
        return this.router;
    }
}
exports.default = new UserRouter().getRouter();
