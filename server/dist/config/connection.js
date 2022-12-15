"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
// Add process.env.MONGODB_URI ||  when deploying
const uri = process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : process.env.LOCAL_URI;
mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
exports.db = mongoose_1.default.connection;
