"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class TagsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get("/", this.getTags);
        this.router.get("/:id", this.getTag);
    }
    getTags(_req, res) {
        res.status(200).send({ message: "Hello from tag route", data: [] });
    }
    getTag(req, res) {
        res.status(200).send({
            data: {
                id: req.params.id,
                name: "Some tag",
                description: "some description",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new TagsRoutes().getRouter();
