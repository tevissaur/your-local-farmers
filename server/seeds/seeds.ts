import {
	User,
	Review,
	Product,
	Category,
	Farm,
	PurchaseOrder,
	Cart,
} from "../models";
import { db } from "../config/connection";
import mongoose from "mongoose";
const {
	Types: { ObjectId },
} = mongoose;
// Generating Ids to hardcode them into the seed references
let userIds = [ObjectId(), ObjectId(), ObjectId(), ObjectId()];
let cartIds = [ObjectId(), ObjectId(), ObjectId(), ObjectId()];
let categoryIds = [
	ObjectId(),
	ObjectId(),
	ObjectId(),
	ObjectId(),
	ObjectId(),
	ObjectId(),
];

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
];

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
];

let farmIds = [ObjectId(), ObjectId(), ObjectId(), ObjectId(), ObjectId()];

// Seed Data
const categoryData = [
	{
		_id: categoryIds[0],
		name: "Baked Goods",
		imgUrl: "/assets/bakedGoods.jpg",
	},
	{
		_id: categoryIds[1],
		name: "Dairy, Meat & Eggs",
		imgUrl: "/assets/DairyMeatEggs.jpg",
	},
	{
		_id: categoryIds[2],
		name: "Fruits & Vegetables",
		imgUrl: "/assets/fruitVegetables.jpg",
	},
	{
		_id: categoryIds[3],
		name: "Flowers & Plants",
		imgUrl: "/assets/flowersPlants.jpg",
	},
	{
		_id: categoryIds[4],
		name: "Beverages",
		imgUrl: "/assets/beverages2.jpg",
	},
	{
		_id: categoryIds[5],
		name: "Seasonal Stuffs",
		imgUrl: "/assets/seasonalStuffs-2.jpg",
	},
];

const userData = [
	{
		_id: userIds[0],
		firstName: "Linh",
		lastName: "Bui",
		username: "linhb",
		email: "linh@email.com",
		password: "pass12345",
		isFarmer: false,
		reviews: [],
		address: "123 Address Lane, City, State",
		cart: cartIds[0],
	},
	{
		_id: userIds[1],
		firstName: "Alex",
		lastName: "Leino",
		username: "alexl",
		email: "alex@email.com",
		password: "pass12345",
		isFarmer: false,
		reviews: [],
		address: "123 Address Lane, City, State",
		cart: cartIds[1],
	},
	{
		_id: userIds[2],
		firstName: "Quentin",
		lastName: "Hnilica",
		username: "quenth",
		email: "iamQ@email.com",
		password: "69420hehe",
		isFarmer: false,
		reviews: [],
		address: "420 Stoner Lane, City, State",
		cart: cartIds[2],
	},
	{
		_id: userIds[3],
		firstName: "Tevis",
		lastName: "Reilly",
		username: "tevisr",
		email: "tevis@email.com",
		password: "pass12345",
		isFarmer: false,
		reviews: [],
		address: "123 Address Lane, City, State",
		cart: cartIds[3],
	},
];

const cartData = [
	{
		_id: cartIds[0],
		products: [
			{
				price: 1,
				quantity: {
					type: "each",
					amount: 1,
				},
				productId: productIds[0],
				farmId: farmIds[0],
			},
		],
		total: 0,
		owner: userIds[0],
	},
	{
		_id: cartIds[1],
		products: [
			{
				price: 1,
				quantity: {
					type: "each",
					amount: 1,
				},
				productId: productIds[0],
				farmId: farmIds[0],
			},
		],
		total: 0,
		owner: userIds[1],
	},
	{
		_id: cartIds[2],
		products: [
			{
				price: 1,
				quantity: {
					type: "each",
					amount: 1,
				},
				productId: productIds[0],
				farmId: farmIds[0],
			},
		],
		total: 0,
		owner: userIds[2],
	},
	{
		_id: cartIds[3],
		products: [
			{
				price: 1,
				quantity: {
					type: "each",
					amount: 1,
				},
				productId: productIds[0],
				farmId: farmIds[0],
			},
		],
		total: 0,
		owner: userIds[3],
	},
];

const reviewData = [
	{
		_id: reviewIds[0],
		author: userIds[0],
		content: "this is the best!",
		rating: 5,
	},
	{
		_id: reviewIds[1],
		author: userIds[1],
		content: "this is almost the best!",
		rating: 4,
	},
	{
		_id: reviewIds[2],
		author: userIds[2],
		content: "this is pretty good!",
		rating: 3,
	},
	{
		_id: reviewIds[3],
		author: userIds[3],
		content: "this could be better",
		rating: 2,
	},
	{
		_id: reviewIds[4],
		author: userIds[3],
		content: "this is not good",
		rating: 1,
	},
	{
		_id: reviewIds[5],
		author: userIds[0],
		content: "customer service is slow",
		rating: 2,
	},
	{
		_id: reviewIds[6],
		author: userIds[2],
		content: "products are okay but customer service needs to be improved",
		rating: 3,
	},
	{
		_id: reviewIds[7],
		author: userIds[1],
		content: "good quality products and friendly staffs",
		rating: 4,
	},
	{
		_id: reviewIds[8],
		author: userIds[0],
		content: "the best in town, I will be back!",
		rating: 5,
	},
];

const purchaseOrderData = [
	{
		orders: [
			{
				items: [],
				pickUpTime: "ASAP",
			},
		],
		orderTotal: 10,
	},
	{
		orders: [
			{
				items: [],
				pickUpTime: "5 minutes",
			},
		],
		orderTotal: 10,
	},
	{
		orders: [
			{
				items: [],
				pickUpTime: "Soon",
			},
		],
		orderTotal: 10,
	},
	{
		orders: [
			{
				items: [],
				pickUpTime: "Never",
			},
		],
		orderTotal: 10,
	},
	{
		orders: [
			{
				items: [],
				pickUpTime: "idk wtf y u asking me",
			},
		],
		orderTotal: 10,
	},
];

const productData = [
	{
		_id: productIds[0],
		name: "Blueberry Muffins",
		price: 1,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[3], reviewIds[2]],
		inSeason: true,
		categories: categoryIds[0],
		farm: farmIds[0],
	},
	{
		_id: productIds[1],
		name: "Bread Loaf",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[3], reviewIds[4]],
		inSeason: true,
		categories: categoryIds[0],
		farm: farmIds[0],
	},
	{
		_id: productIds[2],
		name: "Croissant",
		price: 3,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[1], reviewIds[4]],
		inSeason: true,
		categories: categoryIds[0],
		farm: farmIds[0],
	},
	{
		_id: productIds[3],
		name: "Franziskaner Loaf",
		price: 4,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[1], reviewIds[0], reviewIds[3]],
		inSeason: true,
		categories: categoryIds[0],
		farm: farmIds[0],
	},
	{
		_id: productIds[4],
		name: "Pain au Chocolat",
		price: 5,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[4], reviewIds[1], reviewIds[2]],
		inSeason: true,
		categories: categoryIds[0],
		farm: farmIds[0],
	},
	{
		_id: productIds[5],
		name: "Celery Smoothie",
		price: 6,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[2], reviewIds[3], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[4],
		farm: farmIds[0],
	},
	{
		_id: productIds[6],
		name: "Coffee Slush",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: reviewIds[0],
		inSeason: true,
		categories: categoryIds[4],
		farm: farmIds[0],
	},
	{
		_id: productIds[7],
		name: "Lemonade",
		price: 3,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[3], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[4],
		farm: farmIds[0],
	},
	{
		_id: productIds[8],
		name: "Milk",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[0], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[4],
		farm: farmIds[0],
	},
	{
		_id: productIds[9],
		name: "Eggs",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[0], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[1],
		farm: farmIds[0],
	},
	{
		_id: productIds[10],
		name: "Herbs Cheddar Cheese",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[3], reviewIds[4]],
		inSeason: true,
		categories: categoryIds[1],
		farm: farmIds[0],
	},
	{
		_id: productIds[11],
		name: "Quail Eggs",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[4], reviewIds[2]],
		inSeason: true,
		categories: categoryIds[1],
		farm: farmIds[0],
	},
	{
		_id: productIds[12],
		name: "Salmon",
		price: 5,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: reviewIds[1],
		inSeason: true,
		categories: categoryIds[1],
		farm: farmIds[0],
	},
	{
		_id: productIds[13],
		name: "Sausages",
		price: 4,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[1], reviewIds[0]],
		inSeason: true,
		categories: categoryIds[1],
		farm: farmIds[0],
	},
	{
		_id: productIds[14],
		name: "Steaks and Herbs",
		price: 6,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[2], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[1],
		farm: farmIds[0],
	},

	{
		_id: productIds[15],
		name: "Aster",
		price: 1,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[2], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[3],
		farm: farmIds[0],
	},
	{
		_id: productIds[16],
		name: "Mint",
		price: 1,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[0], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[3],
		farm: farmIds[0],
	},
	{
		_id: productIds[17],
		name: "Rose",
		price: 1,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: reviewIds[3],
		inSeason: true,
		categories: categoryIds[3],
		farm: farmIds[0],
	},
	{
		_id: productIds[18],
		name: "Tulip",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[0], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[3],
		farm: farmIds[0],
	},
	{
		_id: productIds[19],
		name: "Apricot",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[0], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[2],
		farm: farmIds[0],
	},
	{
		_id: productIds[20],
		name: "Carrot",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[3], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[2],
		farm: farmIds[0],
	},
	{
		_id: productIds[21],
		name: "Green Bean",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[0], reviewIds[1]],
		inSeason: true,
		categories: categoryIds[2],
		farm: farmIds[0],
	},
	{
		_id: productIds[22],
		name: "Radish",
		price: 1,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[3], reviewIds[4]],
		inSeason: true,
		categories: categoryIds[2],
		farm: farmIds[0],
	},
	{
		_id: productIds[23],
		name: "Watermelon",
		price: 4,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[1], reviewIds[2]],
		inSeason: true,
		categories: categoryIds[2],
		farm: farmIds[0],
	},
	{
		_id: productIds[24],
		name: "Corn",
		price: 1,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[1], reviewIds[2]],
		inSeason: true,
		categories: categoryIds[5],
		farm: farmIds[0],
	},
	{
		_id: productIds[25],
		name: "Honey",
		price: 4,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[3], reviewIds[4]],
		inSeason: true,
		categories: categoryIds[5],
		farm: farmIds[0],
	},
	{
		_id: productIds[26],
		name: "Mushroom",
		price: 2,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[0], reviewIds[2]],
		inSeason: true,
		categories: categoryIds[5],
		farm: farmIds[0],
	},
	{
		_id: productIds[27],
		name: "Passion fruit",
		price: 1,
		quantity: {
			type: "each",
			amount: 2,
		},
		reviews: [reviewIds[2], reviewIds[3]],
		inSeason: true,
		categories: categoryIds[5],
		farm: farmIds[0],
	},
];

const farmData = [
	{
		_id: farmIds[0],
		name: "Cypress Farms",
		reviews: [reviewIds[5], reviewIds[6]],
		products: [
			productIds[1],
			productIds[6],
			productIds[16],
			productIds[20],
		],
		owners: [userIds[0]],
		purchaseOrders: [],
		story: "Little farm under a cypress tree",
		address: "90 Star Lane",
		location: {
			latitude: 42.0,
			longitude: -83.0,
		},
	},
	{
		_id: farmIds[1],
		name: "Willowbrook Orchards",
		address: "90 Star Lane",
		location: {
			latitude: 42.0,
			longitude: -83.0,
		},
		reviews: [reviewIds[7], reviewIds[8]],
		products: [
			productIds[24],
			productIds[3],
			productIds[11],
			productIds[17],
		],
		purchaseOrders: [],
		owners: [userIds[0]],
		story: "Apples and oranges",
	},
	{
		_id: farmIds[2],
		name: "Oakenshield Livestock",
		address: "90 Star Lane",
		location: {
			latitude: 42.0,
			longitude: -83.0,
		},
		reviews: [reviewIds[5], reviewIds[8]],
		products: [
			productIds[2],
			productIds[7],
			productIds[21],
			productIds[25],
			productIds[4],
			productIds[8],
			productIds[12],
			productIds[18],
			productIds[15],
		],
		purchaseOrders: [],
		owners: [userIds[1]],
		story: "Oaktrees line this beautiful lot where pigs, and cows roam",
	},
	{
		_id: farmIds[3],
		name: "Martha's Vineyard",
		address: "90 Star Lane",
		location: {
			latitude: 42.0,
			longitude: -83.0,
		},
		reviews: [reviewIds[7], reviewIds[8], reviewIds[5]],
		products: [
			productIds[22],
			productIds[26],
			productIds[5],
			productIds[9],
		],
		purchaseOrders: [],
		owners: [userIds[2]],
		story: "Elite, upperclass, better than you.",
	},
	{
		_id: farmIds[4],
		name: "Lenny's House",
		address: "90 Star Lane",
		location: {
			latitude: 42.0,
			longitude: -83.0,
		},
		reviews: [reviewIds[5], reviewIds[8]],
		products: [
			productIds[13],
			productIds[23],
			productIds[27],
			productIds[10],
			productIds[14],
		],
		purchaseOrders: [],
		owners: [userIds[3]],
		story: "Just a simple homestead that provides food to their local neighborhood.",
	},
];

db.once("open", async () => {
	try {
		// Seeding Users
		await User.deleteMany({});
		await User.create(userData);
		console.log("============ USERS SEEDED =============");

		// Seeding Categories
		await Category.deleteMany({});
		await Category.create(categoryData);
		console.log("============ CATEGORIES SEEDED =============");

		// Seeding Products
		await Product.deleteMany({});
		await Product.create(productData);
		console.log("============ PRODUCTS SEEDED =============");

		// Seeding Farms
		await Farm.deleteMany({});
		await Farm.create(farmData);
		console.log("============ FARMS SEEDED =============");

		// Seeding Reviews
		await Review.deleteMany({});
		await Review.create(reviewData);
		console.log("============ REVIEWS SEEDED =============");

		// Seeding Purchase Orders
		await PurchaseOrder.deleteMany({});
		await PurchaseOrder.create(purchaseOrderData);
		console.log("============ PURCHASE ORDERS SEEDED =============");

		// Seeding Carts
		await Cart.deleteMany({});
		await Cart.create(cartData);
		console.log("============ CARTS SEEDED =============");

		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
});
