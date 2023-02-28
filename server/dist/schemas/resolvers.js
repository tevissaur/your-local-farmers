"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const models_1 = require("../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const authentication_service_1 = require("../services/authentication.service");
exports.resolvers = {
    Query: {
        me: async (parent, { _id }) => {
            const user = await models_1.User.findById(_id).populate([
                {
                    path: "purchasedOrders",
                    model: "PurchaseOrder",
                    populate: [
                        {
                            path: "seller",
                            model: "Farm",
                        },
                        {
                            path: "items",
                            model: "Product",
                        },
                    ],
                },
            ]);
            return user;
        },
        reviews: async (parent, args) => {
            return await models_1.Review.find().populate("author");
        },
        products: async (parent, args) => {
            const prod = await models_1.Product.find().populate([
                {
                    path: "reviews",
                    model: "Review",
                    populate: {
                        path: "author",
                        model: "User",
                    },
                },
                {
                    path: "categories",
                    model: "Category",
                },
                {
                    path: "farm",
                    model: "Farm",
                },
            ]);
            // console.log(prod[0].getAvgReviewScore())
            return prod;
        },
        getPO: async (parent, { _id }) => {
            return await models_1.PurchaseOrder.findById(_id).populate([
                {
                    path: "seller",
                    model: "Farm",
                },
                {
                    path: "buyer",
                    model: "User",
                },
                {
                    path: "items",
                    model: "Product",
                    populate: {
                        path: "reviews",
                        model: "Review",
                    },
                },
            ]);
        },
        farms: async (parent, args) => {
            return await models_1.Farm.find()
                .populate([
                {
                    path: "reviews",
                    model: "Review",
                    populate: {
                        path: "author",
                        model: "User",
                    },
                },
                {
                    path: "owners",
                    model: "User",
                    populate: {
                        path: "reviews",
                        model: "Review",
                    },
                },
                {
                    path: "products",
                    model: "Product",
                    populate: [
                        {
                            path: "categories",
                            model: "Category",
                        },
                        {
                            path: "reviews",
                            model: "Review",
                            populate: {
                                path: "author",
                                model: "User",
                            },
                        },
                    ],
                },
                {
                    path: "purchaseOrders",
                    model: "PurchaseOrder",
                },
            ])
                .limit(10);
        },
        farmDashboard: async (parent, { _id }) => {
            return await models_1.Farm.findOne({ _id });
        },
        categories: async (parent, args) => {
            const productCategory = await models_1.Category.find().populate([
                {
                    path: "products",
                    model: "Product",
                },
            ]);
            return productCategory;
        },
        farmStore: async (parent, { _id }) => {
            return await models_1.Farm.findById(_id).populate([
                {
                    path: "reviews",
                    model: "Review",
                    populate: {
                        path: "author",
                        model: "User",
                    },
                },
                {
                    path: "owners",
                    model: "User",
                    populate: {
                        path: "reviews",
                        model: "Review",
                    },
                },
                {
                    path: "products",
                    model: "Product",
                    populate: [
                        {
                            path: "categories",
                            model: "Category",
                        },
                        {
                            path: "reviews",
                            model: "Review",
                            populate: {
                                path: "author",
                                model: "User",
                            },
                        },
                    ],
                },
                {
                    path: "purchaseOrders",
                    model: "PurchaseOrder",
                },
            ]);
        },
        oneProduct: async (parent, { _id }) => {
            return await models_1.Product.findById(_id).populate([
                {
                    path: "reviews",
                    model: "Review",
                    populate: {
                        path: "author",
                        model: "User",
                    },
                },
                {
                    path: "categories",
                    model: "Category",
                },
                {
                    path: "farm",
                    model: "Farm",
                    populate: {
                        path: "owners",
                        model: "User",
                    },
                },
            ]);
        },
        getLocalFarms: async (parent, { latitude, longitude }) => {
            return models_1.Farm.find({
                location: {
                    $near: {
                        $maxDistance: 500000,
                        $geometry: {
                            type: "Point",
                            coordinates: [latitude, longitude],
                        },
                    },
                },
            }).find((error, results) => {
                if (error)
                    console.log(error);
            });
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            try {
                const user = await models_1.User.create(args);
                const token = (0, authentication_service_1.signToken)(user);
                return { user, token };
            }
            catch (err) {
                console.log(err);
                return err;
            }
        },
        login: async (parent, { email, password }) => {
            try {
                const user = await models_1.User.findOne({ email });
                if (!user)
                    throw new apollo_server_express_1.AuthenticationError("No Profile with that email");
                const isPasswordMatching = await bcrypt_1.default.compare(password, user.get("password", null, { getters: false }));
                if (!isPasswordMatching)
                    throw new apollo_server_express_1.AuthenticationError("Incorrect password!");
                const token = (0, authentication_service_1.signToken)(user);
                return { token, user };
            }
            catch (err) {
                // console.log(err)
                return err;
            }
        },
        postReview: async (parent, { review, productId, user, farmId }) => {
            const newReview = await models_1.Review.create(review);
            const newReviewWithAuthor = await models_1.Review.findById(newReview._id).populate([
                {
                    path: "author",
                    model: "User",
                },
            ]);
            if (productId) {
                const reviewedProduct = await models_1.Product.findByIdAndUpdate(productId, { $push: { reviews: newReviewWithAuthor } }, { new: true });
            }
            if (farmId) {
                console.log(newReviewWithAuthor);
                const reviewedFarm = await models_1.Farm.findByIdAndUpdate(farmId, { $push: { reviews: newReviewWithAuthor } }, { new: true });
                console.log(reviewedFarm);
            }
            return newReviewWithAuthor;
        },
        createProduct: async (parent, { product, farmId }) => {
            console.log(product, farmId);
            const newProduct = await models_1.Product.create(product);
            const farm = await models_1.Farm.findByIdAndUpdate(farmId, 
            // {
            // 	$push: { products: newProduct },
            // },
            {
                new: true,
            }).populate([
                {
                    path: "reviews",
                    model: "Review",
                    populate: {
                        path: "author",
                        model: "User",
                    },
                },
                {
                    path: "owners",
                    model: "User",
                    populate: {
                        path: "reviews",
                        model: "Review",
                    },
                },
                {
                    path: "products",
                    model: "Product",
                    populate: [
                        {
                            path: "categories",
                            model: "Category",
                        },
                        {
                            path: "reviews",
                            model: "Review",
                            populate: {
                                path: "author",
                                model: "User",
                            },
                        },
                    ],
                },
            ]);
            return farm;
        },
        createCategory: async (parent, { category }) => {
            const newCategory = await models_1.Category.create(category);
            return newCategory;
        },
        createFarm: async (parent, { farm }) => {
            const user = await models_1.User.findByIdAndUpdate(farm.owners[0], {
                $set: { isFarmer: true },
            }, {
                new: true,
            });
            const newFarm = await models_1.Farm.create(farm);
            return newFarm;
        },
        createPO: async (parent, { PO }) => {
            const newPO = await models_1.PurchaseOrder.create(PO);
            const POWithFarm = await models_1.PurchaseOrder.findById(newPO._id).populate([
                {
                    path: "seller",
                    model: "Farm",
                },
                {
                    path: "buyer",
                    model: "User",
                },
                {
                    path: "items",
                    model: "Product",
                },
            ]);
            const userWithPO = await models_1.User.findByIdAndUpdate(PO.buyer, { $push: { purchasedOrders: newPO } }, { new: true });
            const farmWithPO = await models_1.Farm.findByIdAndUpdate(PO.seller, { $push: { purchaseOrders: newPO } }, { new: true });
            console.log(newPO);
            return POWithFarm;
        },
        updateUser: async (parent, { user }) => {
            const updatedUser = await models_1.User.findByIdAndUpdate(user._id, {
                $set: {
                    ...user,
                },
            }, {
                new: true,
            });
            return updatedUser;
        },
        updateCart: async (parent, { cart: { owner, cart } }) => {
            console.log(cart);
            let cartTotal = cart.reduce((total, num) => total + num);
            return await models_1.User.findByIdAndUpdate(owner, {
                $set: {
                    cart: {
                        total: cartTotal,
                    },
                },
            }, {
                new: true,
            });
        },
        updateFarm: async (parent, { farm }) => {
            const updatedFarm = await models_1.Farm.findByIdAndUpdate(farm._id, {
                $set: {
                    ...farm,
                },
            }, {
                new: true,
            });
            return updatedFarm.populate([
                {
                    path: "reviews",
                    model: "Review",
                    populate: {
                        path: "author",
                        model: "User",
                    },
                },
                {
                    path: "owners",
                    model: "User",
                    populate: {
                        path: "reviews",
                        model: "Review",
                    },
                },
                {
                    path: "products",
                    model: "Product",
                    populate: [
                        {
                            path: "categories",
                            model: "Category",
                        },
                        {
                            path: "reviews",
                            model: "Review",
                            populate: {
                                path: "author",
                                model: "User",
                            },
                        },
                    ],
                },
                {
                    path: "purchaseOrders",
                    model: "PurchaseOrder",
                },
            ]);
        },
    },
};
