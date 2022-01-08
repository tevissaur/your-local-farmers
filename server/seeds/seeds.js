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


const categoryData = [
    { 
        name: 'Baked Goods',
        imgUrl: './assets/bakedGoods.jpg'
    },
    {
        name: 'Dairy, Meat & Eggs',
        imgUrl: './assets/DairyMeatEggs.jpg'
    },
    {
        name: 'Fruits & Vegetables',
        imgUrl: './assets/fruitVegetables.jpg'
    },
    {
        name: 'Flowers & Plants',
        imgUrl: './assets/flowersPlants.jpg'
    },
    {
        name: 'Beverages',
        imgUrl: './assets/beverages2.jpg'
    },
    {
        name: 'Seasonal Stuffs',
        imgUrl: './assets/seasonalStuffs-2.jpg'
    },
]

const userData = [
    {
        firstName: 'Linh',
        lastName: 'Bui',
        email: 'linh@email.com',
        password: 'pass12345',
        isFarmer: false,
        address: '123 Address Lane, City, State'
    },
    {
        firstName: 'Alex',
        lastName: 'Leino',
        email: 'alex@email.com',
        password: 'pass12345',
        isFarmer: false,
        address: '123 Address Lane, City, State'
    },
    {
        firstName: 'Quentin',
        lastName: 'Hnilica',
        email: 'iamQ@email.com',
        password: '69420hehe',
        isFarmer: false,
        address: '420 Stoner Lane, City, State'
    },
    {
        firstName: 'Tevis',
        lastName: 'Reilly',
        email: 'tevis@email.com',
        password: 'pass12345',
        isFarmer: false,
        address: '123 Address Lane, City, State'
    },
]

const reviewData = [
    {
        content: 'this is the best!',
        rating: 5
    },
    {
        content: 'this is almost the best!',
        rating: 4
    },
    {
        content: 'this is pretty good!',
        rating: 3
    },
    {
        content: 'this could be better',
        rating: 2
    },
    {
        content: 'this is trash',
        rating: 1
    },
]
const seedData = async () => {

    console.log('function')
    process.exit(0)
}

seedData()