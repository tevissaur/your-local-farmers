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
            return await Product.find().populate([{
                path: 'reviews',
                model: 'Review',
                populate: {
                    path: 'author',
                    model: 'User'
                }
            }])
        },
        getPO: async (parent, { _id }) => {
            return await PurchaseOrder.findById(_id).populate([
                {
                    path: 'seller',
                    model: 'User'
                },
                {
                    path: 'buyer',
                    model: 'User'
                },
                {
                   path: 'items',
                   model: 'Product'
                }
            ])
        }
    },
    Mutation: {
        createUser: async (parent, { user }) => {
            const newUser = await User.create(user)
            const token = signToken(newUser)
            return { newUser, token }
        },
        postReview: async (parent, { review, product, user, farm }) => {
            product ? console.log('yes product') : console.log('no product')
            user ? console.log('yes user') : console.log('no user')
            farm ? console.log('yes farm') : console.log('no farm')
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
        },
        createFarm: async (parent, { farm }) => {
            console.log(farm)
            const newFarm = await Farm.create(farm)
            return newFarm
        },
        createPO: async (parent, { PO }) => {
            const newPO = await PurchaseOrder.create(PO)
            return newPO
        }
    }
}

module.exports = resolvers