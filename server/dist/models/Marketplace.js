"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const marketplaceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    address: {}
});
