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
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
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
        imgUrl: './assets/bakedGoods.jpg',
       
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
        username: 'linhb',
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
        username: 'alexl',
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
        username: 'quenth',
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
        username: 'tevisr',
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
    {
        _id: reviewIds[5],
        author: userIds[0],
        content: 'customer service is slow',
        rating: 2
    },
    {
        _id: reviewIds[6],
        author: userIds[2],
        content: 'products are okay but customer service needs to be improved',
        rating: 3
    },
    {
        _id: reviewIds[7],
        author: userIds[1],
        content: 'good quality products and friendly staffs',
        rating: 4
    },
    {
        _id: reviewIds[8],
        author: userIds[0],
        content: 'the best in town, I will be back!',
        rating: 5
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
        name: 'Blueberry Muffins',
        price: 1,
        quantity: 6,
        reviews: [reviewIds[3], reviewIds[2]],
        inSeason: true,
        categories: categoryIds[0],
        farm: farmIds[0]
    },
    {
        _id: productIds[1],
        name: 'Bread Loaf',
        price: 2,
        quantity: 5,
        reviews: [reviewIds[3], reviewIds[4],],
        inSeason: true,
        categories:categoryIds[0],
        farm: farmIds[0]
    },
    {
        _id: productIds[2],
        name: 'Croissant',
        price: 3,
        quantity: 4,
        reviews: [reviewIds[1], reviewIds[4]],
        inSeason: true,
        categories: categoryIds[0],
        farm: farmIds[0]
    },
    {
        _id: productIds[3],
        name: 'Franziskaner Loaf',
        price: 4,
        quantity: 3,
        reviews: [reviewIds[1], reviewIds[0], reviewIds[3]],
        inSeason: true,
        categories: categoryIds[0],
        farm: farmIds[0]
    },
    {
        _id: productIds[4],
        name: 'Pain au Chocolat',
        price: 5,
        quantity: 2,
        reviews: [reviewIds[4], reviewIds[1], reviewIds[2]],
        inSeason: true,
        categories: categoryIds[0],
        farm: farmIds[0]
    },
    {
        _id: productIds[5],
        name: 'Celery Smoothie',
        price: 6,
        quantity: 6,
        reviews: [reviewIds[2], reviewIds[3], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[4],
        farm: farmIds[0]
    },
    {
        _id: productIds[6],
        name: 'Coffee Slush',
        price: 2,
        quantity: 1,
        reviews: reviewIds[0],
        inSeason: true,
        categories:categoryIds[4],
        farm: farmIds[0]
    },
    {
        _id: productIds[7],
        name: 'Lemonade',
        price: 3,
        quantity: 3,
        reviews: [reviewIds[3], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[4],
        farm: farmIds[0]
    },
    {
        _id: productIds[8],
        name: 'Milk',
        price: 2,
        quantity: 1,
        reviews: [reviewIds[0],reviewIds[1]],
        inSeason: true,
        categories:categoryIds[4],
        farm: farmIds[0]
    },
    {
        _id: productIds[9],
        name: 'Eggs',
        price: 2,
        quantity: 1,
        reviews: [reviewIds[0],reviewIds[1]],
        inSeason: true,
        categories:categoryIds[1],
        farm: farmIds[0]
    },
    {
        _id: productIds[10],
        name: 'Herbs Cheddar Cheese',
        price: 2,
        quantity: 8,
        reviews: [reviewIds[3],reviewIds[4]],
        inSeason: true,
        categories:categoryIds[1],
        farm: farmIds[0]
    },
    {
        _id: productIds[11],
        name: 'Quail Eggs',
        price: 2,
        quantity: 10,
        reviews: [reviewIds[4],reviewIds[2]],
        inSeason: true,
        categories:categoryIds[1],
        farm: farmIds[0]
    },
    {
        _id: productIds[12],
        name: 'Salmon',
        price: 5,
        quantity: 10,
        reviews: reviewIds[1],
        inSeason: true,
        categories:categoryIds[1],
        farm: farmIds[0]
    },
    {
        _id: productIds[13],
        name: 'Sausages',
        price: 4,
        quantity: 20,
        reviews: [reviewIds[1], reviewIds[0]],
        inSeason: true,
        categories:categoryIds[1],
        farm: farmIds[0]
    },
    {
        _id: productIds[14],
        name: 'Steaks and Herbs',
        price: 6,
        quantity: 10,
        reviews: [reviewIds[2], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[1],
        farm: farmIds[0]
    },
    
    {
        _id: productIds[15],
        name: 'Aster',
        price: 1,
        quantity: 10,
        reviews: [reviewIds[2], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[3],
        farm: farmIds[0]
    },
    {
        _id: productIds[16],
        name: 'Mint',
        price: 1,
        quantity: 10,
        reviews: [reviewIds[0], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[3],
        farm: farmIds[0]
    },
    {
        _id: productIds[17],
        name: 'Rose',
        price: 1,
        quantity: 10,
        reviews: reviewIds[3],
        inSeason: true,
        categories:categoryIds[3],
        farm: farmIds[0]
    },
    {
        _id: productIds[18],
        name: 'Tulip',
        price: 2,
        quantity: 10,
        reviews: [reviewIds[0], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[3],
        farm: farmIds[0]
    },
    {
        _id: productIds[19],
        name: 'Apricot',
        price: 2,
        quantity: 20,
        reviews: [reviewIds[0], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[2],
        farm: farmIds[0]
    },
    {
        _id: productIds[20],
        name: 'Carrot',
        price: 2,
        quantity: 20,
        reviews: [reviewIds[3], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[2],
        farm: farmIds[0]
    },
    {
        _id: productIds[21],
        name: 'Green Bean',
        price: 2,
        quantity: 20,
        reviews: [reviewIds[0], reviewIds[1]],
        inSeason: true,
        categories:categoryIds[2],
        farm: farmIds[0]
    },
    {
        _id: productIds[22],
        name: 'Radish',
        price: 1,
        quantity: 30,
        reviews: [reviewIds[3], reviewIds[4]],
        inSeason: true,
        categories:categoryIds[2],
        farm: farmIds[0]
    },
    {
        _id: productIds[23],
        name: 'Watermelon',
        price: 4,
        quantity: 20,
        reviews: [reviewIds[1], reviewIds[2]],
        inSeason: true,
        categories:categoryIds[2],
        farm: farmIds[0]
    },
    {
        _id: productIds[24],
        name: 'Corn',
        price: 1,
        quantity: 20,
        reviews: [reviewIds[1], reviewIds[2]],
        inSeason: true,
        categories:categoryIds[5],
        farm: farmIds[0]
    },
    {
        _id: productIds[25],
        name: 'Honey',
        price: 4,
        quantity: 20,
        reviews: [reviewIds[3], reviewIds[4]],
        inSeason: true,
        categories:categoryIds[5],
        farm: farmIds[0]
    },
    {
        _id: productIds[26],
        name: 'Mushroom',
        price: 2,
        quantity: 20,
        reviews: [reviewIds[0], reviewIds[2]],
        inSeason: true,
        categories:categoryIds[5],
        farm: farmIds[0]
    },
    {
        _id: productIds[27],
        name: 'Passion fruit',
        price: 1,
        quantity: 10,
        reviews: [reviewIds[2], reviewIds[3]],
        inSeason: true,
        categories:categoryIds[5],
        farm: farmIds[0]
    },
    
    
]

const farmData = [
    {
        _id: farmIds[0],
        name: 'Cypress Farms',
        address: '90 Star Lane',
        reviews: [reviewIds[5], reviewIds[6]],
        products:[productIds[1],productIds[6],productIds[16],productIds[20],],
        owners: [userIds[0]],
        purchaseOrders: [],
        story: 'Little farm under a cypress tree'
    },
    {
        _id: farmIds[1],
        name: 'Willowbrook Orchards',
        address: '567 Apples Street',
        reviews: [reviewIds[7], reviewIds[8]],
        products: [productIds[24],productIds[3],productIds[11],productIds[17],],
        purchaseOrders: [],
        owners: [userIds[0]],
        story: 'Apples and oranges'
    },
    {
        _id: farmIds[2],
        name: 'Oakenshield Livestock',
        address: 'Down the street',
        reviews: [reviewIds[5], reviewIds[8]],
        products: [productIds[2],productIds[7],productIds[21],productIds[25],productIds[4],productIds[8],productIds[12],productIds[18],productIds[15]],
        purchaseOrders: [],
        owners: [userIds[1]],
        story: 'Oaktrees line this beautiful lot where pigs, and cows roam'
    },
    {
        _id: farmIds[3],
        name: 'Martha\'s Vineyard',
        address: 'You know where it is',
        reviews: [reviewIds[7], reviewIds[8], reviewIds[5]],
        products: [
            productIds[22],productIds[26],productIds[5],productIds[9],],
        purchaseOrders: [],
        owners: [userIds[2]],
        story: 'Elite, upperclass, better than you.'
    },
    {
        _id: farmIds[4],
        name: 'Lenny\'s House',
        address: '34 Gumption Lane',
        reviews: [reviewIds[5], reviewIds[8]],
        products:[productIds[13],productIds[23],productIds[27],productIds[10],productIds[14]],
        purchaseOrders: [],
        owners: [userIds[3]],
        story: 'Just a simple homestead that provides food to their local neighborhood.'
    },
]

const seedData = async () => {
    try {

        // Seeding Users
        await User.deleteMany({})
        // userData.forEach( async (user) => {
        //     await User.create(user)
        // })
        await User.insertMany(userData)
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