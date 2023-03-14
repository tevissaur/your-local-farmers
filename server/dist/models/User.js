"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
        type: String,
        required: true,
        validate: [
            ({ length }) => length >= 6,
            "Password should be longer.",
        ],
    },
    isFarmer: {
        type: Boolean,
        default: false,
    },
    address: {
        type: String,
    },
    reviews: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    orders: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "PurchaseOrder",
        },
    ],
    location: {
        latitude: Number,
        longitude: Number,
    },
    cart: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Cart",
    },
    userType: {
        type: String,
        enum: ["Business", "Personal"],
    },
});
// hash user password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt_1.default.hash(this.password, saltRounds);
    }
    next();
});
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
