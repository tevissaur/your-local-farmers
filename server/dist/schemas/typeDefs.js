"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const fs_1 = require("fs");
const schema = (0, fs_1.readFileSync)("./schemas/schema.graphql", { encoding: "utf-8" });
exports.typeDefs = `${schema}`;
