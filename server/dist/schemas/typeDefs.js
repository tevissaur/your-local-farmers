"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    type PurchaseOrder {
        _id: ID!
        seller: Farm
        buyer: User
        dateCreated: String
        items: [Product]
        quantity: Int
        pickUpTime: String!
        orderTotal: Int
    }
    type Quantity {
        type: String!
        amount: Int!
    }
    type Product {
        _id: ID! 
        name: String!
        image: String
        price: Float!
        quantity: Quantity
        reviews: [Review]
        avgScore: Int
        inSeason: Boolean
        categories: [Category]
        farm: Farm
    }
    type Category {
        _id: ID!
        name: String!
        imgUrl: String
    }
    type Review {
        _id: ID!
        author: User
        content: String!
        rating: Int!
    }
    type Location {
        _id: ID
        latitude: Int
        longitude: Int
    }
    type Farm {
        _id: ID!
        name: String!
        address: String!
        story: String!
        reviews: [Review]
        products: [Product] 
        avgScore: Int
        purchaseOrders: [PurchaseOrder]
        owners: [User]
        categoriesOffered: [Category]
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
        orders: [PurchaseOrder]
        location: Location
        cart: Cart
    }
    type Cart {
        total: Int
        items: [CartProduct]
    }
    type CartProduct {
        price: Int!
        quantity: Quantity!
        dateAdded: String
        farmID: ID!
        productID: ID!
    }
    type Auth {
        token: ID!
        user: User
    }
    input QuantityInput {
        amount: Int!
        type: String!
    }
    input UpdateCartInput {
        owner: ID!
        cart: CartInput
    }
    input CartInput {
        total: Int
        items: [CartProductInput]
    }
    input CartProductInput {
        price: Int!
        quantity: QuantityInput!
        dateAdded: String
        farmID: ID!
        productID: ID!
    }
    
    input EditLocation {
        latitude: Int
        longitude: Int
    }
    
    input UpdatedUser {
        _id: ID!
        firstName: String
        lastName: String
        address: String
        username: String
        email: String
        password: String
        isFarmer: Boolean
    }
    
    input NewReview {
        author: ID!
        content: String!
        rating: Int!
    }
    input NewProduct {
        name: String!
        price: Int!
        quantity: Int!
        categories: [ID]!
        description: String!
    }
    input NewCategory {
        name: String!
        imgUrl: String
    }
    input NewFarm {
        name: String!
        address: String!
        owners: [ID]!
        story: String
    }
    input NewPurchaseOrder {
        seller: ID!
        buyer: ID!
        dateCreated: String
        items: [ID]!
        pickUpTime: String
        orderTotal: Int
    }
    input UpdatedFarm {
        _id: ID
        name: String
        address: String 
        story: String

    }

    type Query {
        me(_id: ID!): User
        reviews: [Review]
        products: [Product]
        oneProduct(_id: ID!): Product
        getPO(_id: ID!): PurchaseOrder
        farms: [Farm]
        categories: [Category]
        farmDashboard(_id: ID!): Farm
        farmStore(_id: ID!): Farm
        localFarms(_id: ID!): [Farm]
    }

    type Mutation {
        createUser(username: String!, password: String!, email: String!, firstName: String!): Auth
        login(email: String!, password: String!): Auth
        postReview(review: NewReview!, product_id: ID, user: ID, farm_id: ID): Review
        createProduct(product: NewProduct, farmId: ID): Farm
        createCategory(category: NewCategory): Category
        createFarm(farm: NewFarm): Farm
        createPO(PO: NewPurchaseOrder): PurchaseOrder
        updateUser(user: UpdatedUser): User
        updateFarm(farm: UpdatedFarm): Farm
        updateCart(cart: CartInput): User
    }
`;
