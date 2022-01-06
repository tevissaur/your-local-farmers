const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, { _id }) => {
            console.log(_id)
            return _id
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            console.log(args)
            // const user = await User.create(args)
            // const token = signToken(user)
            return args
        },
    }
}

module.exports = resolvers