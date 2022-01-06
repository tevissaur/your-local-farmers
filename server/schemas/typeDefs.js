const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me(_id: ID!): User
    }

`


module.exports = typeDefs