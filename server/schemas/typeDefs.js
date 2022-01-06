const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        isFarmer: Boolean!
        address: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    input NewUser {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        isFarmer: Boolean
        address: String!
    }
    
    type Query {
        me(_id: ID!): User
    }

    type Mutation {
        createUser(user: NewUser!): Auth
    }
`


module.exports = typeDefs