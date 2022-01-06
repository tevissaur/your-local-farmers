const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, { _id }) => {
            return await User.findById(_id)
        }
    },
    Mutation: {
        createUser: async (parent, { user }) => {
            console.log(user)
            const newUser = await User.create(user)
            console.log(newUser)
            const token = signToken(newUser)
            return { newUser, token }
        },
    }
}

module.exports = resolvers