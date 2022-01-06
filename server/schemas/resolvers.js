const { AuthenticationError } = require('apollo-server-express');
const { User, Review, Product, Category } = require('../models');

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
            return await Product.find().populate([{
                path: 'reviews',
                model: 'Review',
                populate: {
                    path: 'author',
                    model: 'User'
                }
            }])
        }
    },
    Mutation: {
        createUser: async (parent, { user }) => {
            const newUser = await User.create(user)
            const token = signToken(newUser)
            return { newUser, token }
        },
        postReview: async (parent, { review, product, user, farm }) => {
            const newReview = await Review.create(review)
            return newReview
        },
        createProduct: async (parent, { product }) => {
            const newProduct = await Product.create(product)
            return newProduct
        },
        createCategory: async (parent, { category }) => {
            console.log(category)
            const newCategory = await Category.create(category)
            return newCategory
        }
    }
}

module.exports = resolvers