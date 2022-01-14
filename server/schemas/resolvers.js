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
            return await User.findById(_id)
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
            )
        },
        farmDashboard: async (parent, { _id }) => {
            return await Farm.findById(_id).populate(
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
            )
        },
        categories: async (parent, args) => {
            const productCategory = await Category.find().populate([
                {
                    path: 'products',
                    model: 'Product'
                }
            ])
            console.log(productCategory)
            return productCategory
        },
        farmStore: async (parent, { _id }) => {
            return await Farm.findById(_id).populate([
                {
                    path: 'products',
                    model: 'Product',
                    populate: {
                        path: 'reviews',
                        model: 'Review',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    }
                },
                {
                    path: 'reviews',

                }
            ])
        },
        oneProduct: async (parent, { _id }) => {
            return Product.findById(_id).populate(
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
                        model: 'Farm'
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
                console.log(err)
            }
        },
        postReview: async (parent, { review, product_id, user, farm }) => {
            console.log(review)
            const newReview = await (await Review.create(review))
            const newReviewWithAuthor = await Review.findById(newReview._id).populate([
                {
                    path:"author",
                    model:"User"
                },
            ])

            const reviewedProduct = await Product.findByIdAndUpdate(
               product_id,
                {$push : {reviews : newReviewWithAuthor}},
                {new: true}
            )
            console.log(newReviewWithAuthor)
   
            return newReviewWithAuthor
            //     return reviewdProduct
            //     console.log(reviewdProduct)
            // const reviewedFarm = await Farm.findByIdAndUpdate(
            //     farm,
            //     {
            //         $push: {
            //             reviews: newReview.id
            //         }
            //     }
            // )
       
        },
        createProduct: async (parent, { product }) => {
            const newProduct = await Product.create(product)
            return newProduct
        },
        createCategory: async (parent, { category }) => {
            console.log(category)
            const newCategory = await Category.create(category)
            return newCategory
        },
        createFarm: async (parent, { farm }) => {
            console.log(farm)
            const newFarm = await Farm.create(farm)
            return newFarm
        },
        createPO: async (parent, { PO }) => {
            const newPO = await PurchaseOrder.create(PO)
            return newPO.populate()
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
        }
    }
}

module.exports = resolvers