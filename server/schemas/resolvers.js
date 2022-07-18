const { AuthenticationError } = require('apollo-server-express');
const {
    User,
    Review,
    Product,
    Category,
    Farm,
    PurchaseOrder
} = require('../models');

const { signToken } = require('../utils/auth')

const resolvers = {

    Query: {
        me: async (parent, { _id }) => {
            const user = await User.findById(_id).populate([

                {
                    path: 'purchasedOrders',
                    model: 'PurchaseOrder',
                    populate: [
                        {
                            path: "seller",
                            model: "Farm"
                        },
                        {
                            path: "items",
                            model: "Product"
                        }
                    ]
                },


            ])
            return user
        },
        reviews: async (parent, args) => {
            return await Review.find().populate('author')
        },
        products: async (parent, args) => {
            const prod = await Product.find().populate([
                {
                    path: 'reviews',
                    model: 'Review',
                    populate: {
                        path: 'author',
                        model: 'User'
                    }
                },
                {
                    path: 'categories',
                    model: 'Category'
                },
                {
                    path: 'farm',
                    model: 'Farm'
                }
            ])
            // console.log(prod[0].getAvgReviewScore())
            return prod
        },
        getPO: async (parent, { _id }) => {
            return await PurchaseOrder.findById(_id).populate([
                {
                    path: 'seller',
                    model: 'Farm'
                },
                {
                    path: 'buyer',
                    model: 'User'
                },
                {
                    path: 'items',
                    model: 'Product',
                    populate: {
                        path: 'reviews',
                        model: 'Review'
                    }
                }
            ])
        },
        farms: async (parent, args) => {
            return await Farm.find().populate(
                [
                    {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    },
                    {
                        path: 'owners',
                        model: 'User',
                        populate: {
                            path: 'reviews',
                            model: 'Review'
                        }
                    },
                    {
                        path: 'products',
                        model: 'Product',
                        populate: [
                            {
                                path: 'categories',
                                model: 'Category'
                            },
                            {
                                path: 'reviews',
                                model: 'Review',
                                populate: {
                                    path: 'author',
                                    model: 'User'
                                }
                            }
                        ]
                    },
                    {
                        path: 'purchaseOrders',
                        model: 'PurchaseOrder'
                    }
                ]
            ).limit(10)
        },
        farmDashboard: async (parent, { _id }) => {
            return await Farm.findOne({ owners: [_id] }).populate(
                [
                    {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    },
                    {
                        path: 'owners',
                        model: 'User',
                        populate: {
                            path: 'reviews',
                            model: 'Review'
                        }
                    },
                    {
                        path: 'products',
                        model: 'Product',
                        populate: [
                            {
                                path: 'categories',
                                model: 'Category'
                            },
                            {
                                path: 'reviews',
                                model: 'Review',
                                populate: {
                                    path: 'author',
                                    model: 'User'
                                }
                            }
                        ]
                    },
                    {
                        path: 'purchaseOrders',
                        model: 'PurchaseOrder',
                        populate: [{

                            path: 'sellers',
                            model: 'Farm'
                        },
                        {
                            path: 'items',
                            model: 'Product'
                        },
                        {
                            path: 'buyer',
                            model: 'User'
                        }
                        ]
                    },
                    {
                        path: 'categoriesOffered',
                        model: 'Category'
                    }
                ]
            )
        },
        categories: async (parent, args) => {
            const productCategory = await Category.find().populate([
                {
                    path: 'products',
                    model: 'Product'
                }
            ])
            return productCategory
        },
        farmStore: async (parent, { _id }) => {
            return await Farm.findById(_id).populate([
                {
                    path: 'reviews',
                    model: 'Review',
                    populate: {
                        path: 'author',
                        model: 'User'
                    }
                },
                {
                    path: 'owners',
                    model: 'User',
                    populate: {
                        path: 'reviews',
                        model: 'Review'
                    }
                },
                {
                    path: 'products',
                    model: 'Product',
                    populate: [
                        {
                            path: 'categories',
                            model: 'Category'
                        },
                        {
                            path: 'reviews',
                            model: 'Review',
                            populate: {
                                path: 'author',
                                model: 'User'
                            }
                        }
                    ]
                },
                {
                    path: 'purchaseOrders',
                    model: 'PurchaseOrder'
                }
            ])
        },
        oneProduct: async (parent, { _id }) => {
            return await Product.findById(_id).populate(
                [
                    {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    },
                    {
                        path: 'categories',
                        model: 'Category'
                    },
                    {
                        path: 'farm',
                        model: 'Farm',
                        populate: {
                            path: 'owners',
                            model: 'User'
                        }
                    }
                ]
            )
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            try {
                const user = await User.create(args)
                const token = signToken(user)
                return { user, token }

            } catch (err) {
                console.log(err)
                return err
            }
        },
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email })

                if (!user) {
                    throw new AuthenticationError('No Profile with that email')
                }

                const correctPw = await user.isCorrectPassword(password)

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect password!');
                }
                const token = signToken(user)
                return { token, user }
            } catch (err) {
                // console.log(err)
                return err
            }
        },
        postReview: async (parent, { review, productId, user, farmId }) => {
            const newReview = Review.create(review)
            const newReviewWithAuthor = await Review.findById(newReview._id).populate([
                {
                    path: "author",
                    model: "User"
                },
            ])

            if (productId) {
                const reviewedProduct = await Product.findByIdAndUpdate(
                    productId,
                    { $push: { reviews: newReviewWithAuthor } },
                    { new: true }
                )

            }

            if (farmId) {
                console.log(newReviewWithAuthor)
                const reviewedFarm = await Farm.findByIdAndUpdate(
                    farmId,
                    { $push: { reviews: newReviewWithAuthor } },
                    { new: true }


                )
                console.log(reviewedFarm)
            }



            return newReviewWithAuthor
        },
        createProduct: async (parent, { product, farmId }) => {
            console.log(product, farmId)
            const newProduct = await Product.create(product)
            const farm = await Farm.findByIdAndUpdate(farmId, {
                $push: { products: newProduct }
            }, {
                new: true
            }).populate(
                [
                    {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    },
                    {
                        path: 'owners',
                        model: 'User',
                        populate: {
                            path: 'reviews',
                            model: 'Review'
                        }
                    },
                    {
                        path: 'products',
                        model: 'Product',
                        populate: [
                            {
                                path: 'categories',
                                model: 'Category'
                            },
                            {
                                path: 'reviews',
                                model: 'Review',
                                populate: {
                                    path: 'author',
                                    model: 'User'
                                }
                            }
                        ]
                    }
                ]
            )
            return farm
        },
        createCategory: async (parent, { category }) => {
            const newCategory = await Category.create(category)
            return newCategory
        },
        createFarm: async (parent, { farm }) => {
            const user = await User.findByIdAndUpdate(farm.owners[0], {
                $set: { isFarmer: true }
            }, {
                new: true
            })
            const newFarm = await Farm.create(farm)
            return newFarm
        },
        createPO: async (parent, { PO }) => {


            const newPO = await PurchaseOrder.create(PO)
            const POWithFarm = await PurchaseOrder.findById(newPO._id).populate([
                {
                    path: "seller",
                    model: "Farm"
                },
                {
                    path: "buyer",
                    model: "User"
                },
                {
                    path: "items",
                    model: "Product"
                },

            ])
            const userWithPO = await User.findByIdAndUpdate(
                PO.buyer,
                { $push: { purchasedOrders: newPO } },
                { new: true }
            )
            const farmWithPO = await Farm.findByIdAndUpdate(
                PO.seller,
                { $push: { purchaseOrders: newPO } },
                { new: true }
            )
            console.log(newPO)
            return POWithFarm
        },
        updateUser: async (parent, { user }) => {
            console.log(user)
            const updatedUser = await User.findByIdAndUpdate(user._id, {
                $set: {
                    ...user
                }
            }, {
                new: true
            })
            return updatedUser.populate([
                {
                    path: 'reviews',
                    model: 'Review',
                    populate: {
                        path: 'author',
                        model: 'User'
                    }
                }
            ])
        },
        updateFarm: async (parent, { farm }) => {
            const updatedFarm = await Farm.findByIdAndUpdate(farm._id, {
                $set: {
                    ...farm
                }
            }, {
                new: true
            })
            return updatedFarm.populate(
                [
                    {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    },
                    {
                        path: 'owners',
                        model: 'User',
                        populate: {
                            path: 'reviews',
                            model: 'Review'
                        }
                    },
                    {
                        path: 'products',
                        model: 'Product',
                        populate: [
                            {
                                path: 'categories',
                                model: 'Category'
                            },
                            {
                                path: 'reviews',
                                model: 'Review',
                                populate: {
                                    path: 'author',
                                    model: 'User'
                                }
                            }
                        ]
                    },
                    {
                        path: 'purchaseOrders',
                        model: 'PurchaseOrder'
                    }
                ])
        }
    }
}

module.exports = resolvers