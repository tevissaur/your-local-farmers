const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type PurchaseOrder {
        _id: ID!
        seller: Farm
        buyer: User
        dateCreated: String
        items: [Product]
        pickUpTime: String!
        orderTotal: Int
    }
    type Product {
        _id: ID! 
        name: String!
        price: Float!
        quantity: Int!
        reviews: [Review]
        avgScore: Int
        inSeason: Boolean
        categories: [Category]
        farm: Farm
    }
    type Category {
        name: String!
        imgUrl: String
        products: [Product]
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
        owners: [User]
    }
    type User {
        _id: ID!
        firstName: String
        lastName: String
        username: String!
        email: String!
        password: String!
        isFarmer: Boolean!
        address: String
        reviews: [Review]
        fullName: String
        profilePic: String 
    }
    type Auth {
        token: ID!
        user: User
    }

    input NewUser {
        username: String!
        email: String!
        password: String!
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
        inSeason: Boolean
    }
    input NewCategory {
        name: String!
        imgUrl: String
    }
    input NewFarm {
        name: String!
        address: String!
        owners: [ID]!
    }
    input NewPurchaseOrder {
        seller: ID!
        buyer: ID!
        dateCreated: String
        items: [ID]!
        pickUpTime: String!
        orderTotal: Int
    }


    type Query {
        me(_id: ID!): User
        reviews: [Review]
        products: [Product]
        getPO(_id: ID!): PurchaseOrder
        farms: [Farm]
        categories: [Category]
        farmDashboard(_id: ID!): Farm
    }

    type Mutation {
        createUser(username: String!, password: String!, email: String!): Auth
        login(email: String!, password: String!): Auth
        postReview(review: NewReview!, product: ID, user: ID, farm: ID): Review
        createProduct(product: NewProduct!, farm: ID!, category: ID!): Product
        createCategory(category: NewCategory!): Category
        createFarm(farm: NewFarm): Farm
        createPO(PO: NewPurchaseOrder): PurchaseOrder
    }
`


module.exports = typeDefs