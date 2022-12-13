"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    farm: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Farm'
    },
    message: {
        type: String,
        required: true
    }
});
const Message = (0, mongoose_1.model)('Message', messageSchema);
exports.default = Message;
