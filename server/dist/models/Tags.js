"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TagsEnum_1 = require("../utils/enums/TagsEnum");
const tagsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        enum: TagsEnum_1.tagsEnum
    }
});
const Tags = (0, mongoose_1.model)('Tags', tagsSchema);
exports.default = Tags;
