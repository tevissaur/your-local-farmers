const {
    User,
    Review,
    Product,
    Category,
    Farm,
    PurchaseOrder
} = require('../models');
const { Types: { ObjectId } } = require('mongoose')
const db = require('../config/connection')


// Generating Ids to hardcode them into the seed references
let userIds = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let categoryIds = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let reviewIds = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let productIds = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let farmIds = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]


// Seed Data
const categoryData = [
    { 
        _id: categoryIds[0],
        name: 'Baked Goods',
        imgUrl: './assets/bakedGoods.jpg'
    },
    {
        _id: categoryIds[1],
        name: 'Dairy, Meat & Eggs',
        imgUrl: './assets/DairyMeatEggs.jpg'
    },
    {
        _id: categoryIds[2],
        name: 'Fruits & Vegetables',
        imgUrl: './assets/fruitVegetables.jpg'
    },
    {
        _id: categoryIds[3],
        name: 'Flowers & Plants',
        imgUrl: './assets/flowersPlants.jpg'
    },
    {
        _id: categoryIds[4],
        name: 'Beverages',
        imgUrl: './assets/beverages2.jpg'
    },
    {
        _id: categoryIds[5],
        name: 'Seasonal Stuffs',
        imgUrl: './assets/seasonalStuffs-2.jpg'
    },
]

const userData = [
    {   
        _id: userIds[0],
        firstName: 'Linh',
        lastName: 'Bui',
        email: 'linh@email.com',
        password: 'pass12345',
        isFarmer: false,
        reviews: [],
        address: '123 Address Lane, City, State'
    },
    {
        _id: userIds[1],
        firstName: 'Alex',
        lastName: 'Leino',
        email: 'alex@email.com',
        password: 'pass12345',
        isFarmer: false,
        reviews: [],
        address: '123 Address Lane, City, State'
    },
    {
        _id: userIds[2],
        firstName: 'Quentin',
        lastName: 'Hnilica',
        email: 'iamQ@email.com',
        password: '69420hehe',
        isFarmer: false,
        reviews: [],
        address: '420 Stoner Lane, City, State'
    },
    {
        _id: userIds[3],
        firstName: 'Tevis',
        lastName: 'Reilly',
        email: 'tevis@email.com',
        password: 'pass12345',
        isFarmer: false,
        reviews: [],
        address: '123 Address Lane, City, State'
    },
]

const reviewData = [
    {
        _id: reviewIds[0],
        author: userIds[0],
        content: 'this is the best!',
        rating: 5
    },
    {
        _id: reviewIds[1],
        author: userIds[1],
        content: 'this is almost the best!',
        rating: 4
    },
    {
        _id: reviewIds[2],
        author: userIds[2],
        content: 'this is pretty good!',
        rating: 3
    },
    {
        _id: reviewIds[3],
        author: userIds[3],
        content: 'this could be better',
        rating: 2
    },
    {
        _id: reviewIds[4],
        author: userIds[3],
        content: 'this is trash',
        rating: 1
    },
]

const purchaseOrderData = [
    {
        items: [],
        pickUpTime: 'ASAP',
    },
    {
        items: [],
        pickUpTime: 'Never',
    },
    {
        items: [],
        pickUpTime: 'Soon',
    },
    {
        items: [],
        pickUpTime: '5 minutes',
    },
    {
        items: [],
        pickUpTime: 'idk wtf y u asking me',
    },
]

const productData = [
    {
        _id: productIds[0],
        name: 'Carrots',
        price: 1,
        quantity: 6,
        reviews: [reviewIds[3], reviewIds[2]],
        inSeason: true,
        categories: [categoryIds[2], categoryIds[5]]
    },
    {
        _id: productIds[1],
        name: 'Strawberries',
        price: 2,
        quantity: 5,
        reviews: [reviewIds[3], reviewIds[4], reviewIds[3]],
        inSeason: true,
        categories: [categoryIds[2], categoryIds[5]]
    },
    {
        _id: productIds[2],
        name: 'Eggs',
        price: 3,
        quantity: 4,
        reviews: [reviewIds[3], reviewIds[1], reviewIds[4]],
        inSeason: true,
        categories: [categoryIds[1]]
    },
    {
        _id: productIds[3],
        name: 'Mulberry Wine',
        price: 4,
        quantity: 3,
        reviews: [reviewIds[0], reviewIds[0], reviewIds[3]],
        inSeason: true,
        categories: [categoryIds[4]]
    },
    {
        _id: productIds[4],
        name: 'Chesnuts',
        price: 5,
        quantity: 2,
        reviews: [reviewIds[4], reviewIds[1], reviewIds[2]],
        inSeason: true,
        categories: [categoryIds[5]]
    },
    {
        _id: productIds[5],
        name: 'Chocochip Cookies',
        price: 6,
        quantity: 1,
        reviews: [reviewIds[0], reviewIds[3], reviewIds[1]],
        inSeason: true,
        categories: [categoryIds[0]]
    },
]

const farmData = [
    {
        _id: farmIds[0],
        name: 'Cypress Farms',
        address: '90 Star Lane',
        reviews: [reviewIds[3], reviewIds[2]],
        products: [productIds[3],productIds[2],productIds[0],productIds[4],],
        purchaseOrders: [],
        owners: [userIds[0]],
        story: 'Little farm under a cypress tree'
    },
    {
        _id: farmIds[1],
        name: 'Willowbrook Orchards',
        address: '567 Apples Street',
        reviews: [reviewIds[3], reviewIds[2]],
        products: [productIds[0],productIds[2],productIds[3],productIds[5],],
        purchaseOrders: [],
        owners: [userIds[0]],
        story: 'Apples and oranges'
    },
    {
        _id: farmIds[2],
        name: 'Oakenshield Livestock',
        address: 'Down the street',
        reviews: [reviewIds[3], reviewIds[2]],
        products: [productIds[3],productIds[2],productIds[0],productIds[4],],
        purchaseOrders: [],
        owners: [userIds[1]],
        story: 'Oaktrees line this beautiful lot where pigs, and cows roam'
    },
    {
        _id: farmIds[3],
        name: 'Martha\'s Vineyard',
        address: 'You know where it is',
        reviews: [reviewIds[3], reviewIds[2], reviewIds[3], reviewIds[2]],
        products: [productIds[0],productIds[3],productIds[0],productIds[3],],
        purchaseOrders: [],
        owners: [userIds[2]],
        story: 'Elite, upperclass, better than you.'
    },
    {
        _id: farmIds[4],
        name: 'Lenny\'s House',
        address: '34 Gumption Lane',
        reviews: [reviewIds[3], reviewIds[2], reviewIds[3], reviewIds[2]],
        products: [productIds[1],productIds[2],productIds[4],productIds[0],],
        purchaseOrders: [],
        owners: [userIds[3]],
        story: 'Just a simple homestead that provides food to their local neighborhood.'
    },
]

const seedData = async () => {
    try {

        // Seeding Users
        await User.deleteMany({})
        const userSeed = await User.insertMany(userData)
        console.log('============ USERS SEEDED =============')
        
        // Seeding Products 
        await Product.deleteMany({})
        await Product.insertMany(productData)
        console.log('============ PRODUCTS SEEDED =============')

        // Seeding Farms
        await Farm.deleteMany({})
        await Farm.insertMany(farmData)
        console.log('============ FARMS SEEDED =============')

        // Seeding Categories
        await Category.deleteMany({})
        await Category.insertMany(categoryData)
        console.log('============ CATEGORIES SEEDED =============')

        // Seeding Reviews
        await Review.deleteMany({})
        await Review.insertMany(reviewData)
        console.log('============ REVIEWS SEEDED =============')

        // Seeding Purchase Orders
        await PurchaseOrder.deleteMany({})
        await PurchaseOrder.insertMany(purchaseOrderData)
        console.log('============ PURCHASE ORDERS SEEDED =============')
        

        process.exit(0)

    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

seedData()