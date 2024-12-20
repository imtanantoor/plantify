"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const constants_1 = __importDefault(require("./utils/constants"));
app_1.default.listen(constants_1.default.PORT, () => {
    console.log(`SERVER LISTENING TO ${constants_1.default.PORT}`);
});
