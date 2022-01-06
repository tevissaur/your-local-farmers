const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type PurchaseOrder {
        seller: Farm!
        buyer: User!
        dateCreated: String
        items: [Product]
        pickUpTime: String!
    }
    type Product {
        _id: ID! 
        name: String!
        price: Float!
        quantity: Int!
        reviews: [Review]
        inSeason: Boolean
        categories: [Category]
    }
    type Category {
        name: String!
    }
    type Review {
        _id: ID!
        author: User
        content: String!
        rating: Int!
    }

    type Farm {
        _id: ID!
        name: String!
        address: String!
        reviews: [Review]
        products: [Product]
        purchaseOrders: [PurchaseOrder]
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        isFarmer: Boolean!
        address: String!
        reviews: [Review]
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
    
    input NewReview {
        author: ID!
        content: String!
        rating: Int!
    }
    input NewProduct {
        name: String!
        price: Float!
        quantity: Int!
        reviews: [ID!]
        inSeason: Boolean
        categories: [ID!]
    }
    input NewCategory {
        name: String!
    }
    type Query {
        me(_id: ID!): User
        reviews: [Review]
        products: [Product]
    }

    type Mutation {
        createUser(user: NewUser!): Auth
        postReview(review: NewReview!, product: ID, user: ID, farm: ID): Review
        createProduct(product: NewProduct!): Product
        createCategory(category: NewCategory!): Category

    }
`


module.exports = typeDefs