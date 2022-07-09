const {
    Farm, Product
} = require('../models');
const { Types: { ObjectId } } = require('mongoose')
const fs = require('node:fs')
const xlsx = require('node-xlsx')


class csaSeeder {
    static file = xlsx.parse(fs.readFileSync('C:/Users/tevis/code/bootcamp/your-local-farmers/server/seeds/csa_2022-66195453.xlsx'))
    static farms = []
    static allProducts = {}
    seed() {
        this.file.forEach(({ data }) => {
            this.buildFarms(data)
        })
    }

    buildFarms(data) {
        data.forEach((row, r) => {
            let farm = {
                type: 'CSA',
                acceptedPayments: [],
                story: '',
                address: '',
                location: {
                    latitude: 0,
                    longitude: 0
                }
            }
            let isTitles = r === 0
            row.forEach((column, c) => {
                if (!isTitles) {
                    let colTitle = data[0][c]
                    switch (colTitle) {
                        case 'listing_name':
                            farm = {
                                ...farm,
                                name: column
                            }
                            break
                        // Address
                        case 'location_address':
                            farm = {
                                ...farm,
                                address: column
                            }
                            break
                        // Longitude
                        case 'location_x':
                            farm = {
                                ...farm,
                                location: {
                                    ...farm.location,
                                    longitude: parseFloat(column)
                                }
                            }
                            break
                        // Latitude
                        case 'location_y':
                            farm = {
                                ...farm,
                                location: {
                                    ...farm.location,
                                    latitude: parseFloat(column)
                                }
                            }
                            break
                        case 'season_month_start':
                            farm = {
                                ...farm,
                                season: {
                                    ...farm.season,
                                    start: parseInt(column.split('-')[1])
                                }
                            }
                            break
                        case 'season_month_end':
                            farm = {
                                ...farm,
                                season: {
                                    ...farm.season,
                                    end: parseInt(column.split('-')[1])
                                }
                            }
                            break
                        case 'specialproductionmethods_other_desc':
                            farm = {
                                ...farm,
                                story: column
                            }
                            break
                        case 'products':
                            let products = column.split(';')
                            allProducts = {
                                ...allProducts,
                                [farm.name]: products
                            }
                            break
                        case 'acceptedpayment':
                            let mainPayments = column.split(';')
                            farm = {
                                ...farm,
                                acceptedPayments: [...farm.acceptedPayments, ...mainPayments]
                            }
                            break
                        case 'acceptedpayment_other_desc':
                            let otherPayments = column.split(',')
                            farm = {
                                ...farm,
                                acceptedPayments: [...farm.acceptedPayments, ...otherPayments]
                            }
                            break
                        default:
                            farm = farm
                            break
                    }
                }
            })
            if (!isTitles) {
                this.farms.push(farm)
            }
        })
    }

    insertProducts() {

    }

    insertFarms() {

    }
}

// location_x = longitude
// location_y = latitude

let file = xlsx.parse(fs.readFileSync('C:/Users/tevis/code/bootcamp/your-local-farmers/server/seeds/csa_2022-66195453.xlsx'))

let farms = []
let allProducts = {}


const buildFarms = (data) => {
    data.forEach((row, r) => {
        let farm = {
            type: 'CSA',
            acceptedPayments: [],
            story: '',
            address: 'TBD',
            location: {
                latitude: 0,
                longitude: 0
            }
        }
        let isTitles = r === 0
        row.forEach((column, c) => {
            if (!isTitles) {
                let colTitle = data[0][c]
                switch (colTitle) {
                    case 'listing_name':
                        farm = {
                            ...farm,
                            name: column
                        }
                        break
                    // Address
                    case 'location_address':
                        farm = {
                            ...farm,
                            address: column
                        }
                        break
                    // Longitude
                    case 'location_x':
                        farm = {
                            ...farm,
                            location: {
                                ...farm.location,
                                longitude: parseFloat(column)
                            }
                        }
                        break
                    // Latitude
                    case 'location_y':
                        farm = {
                            ...farm,
                            location: {
                                ...farm.location,
                                latitude: parseFloat(column)
                            }
                        }
                        break
                    case 'season_month_start':
                        farm = {
                            ...farm,
                            season: {
                                ...farm.season,
                                start: parseInt(column.split('-')[1])
                            }
                        }
                        break
                    case 'season_month_end':
                        farm = {
                            ...farm,
                            season: {
                                ...farm.season,
                                end: parseInt(column.split('-')[1])
                            }
                        }
                        break
                    case 'specialproductionmethods_other_desc':
                        farm = {
                            ...farm,
                            story: column
                        }
                        break
                    case 'products':
                        let products = column.split(';').filter(product => product !== '')
                        allProducts = {
                            ...allProducts,
                            [farm.name]: products
                        }
                        break
                    case 'acceptedpayment':
                        let mainPayments = column.split(';').filter(payment => payment !== '')
                        farm = {
                            ...farm,
                            acceptedPayments: [...farm.acceptedPayments, ...mainPayments]
                        }
                        break
                    case 'acceptedpayment_other_desc':
                        let otherPayments = column.split(',').filter(payment => payment !== '')
                        farm = {
                            ...farm,
                            acceptedPayments: [...farm.acceptedPayments, ...otherPayments]
                        }
                        break
                    default:
                        farm = farm
                        break
                }
            }
        })
        if (!isTitles) {
            farms.push(farm)
        }
    })
}


const createFarms = () => {

}

const main = async (args) => {
    // const seeder = new csaSeeder()
    // file.forEach(({ data }) => {
    //     buildFarms(data)
    // })
    // // console.log(farms)
    // // await Farm.deleteMany({})
    // // await Farm.insertMany(farms)
    // // console.log('==== CSAs INSERTED ====')
    // await Product.deleteMany({})

    // for (farmName in allProducts) {
    //     let products = allProducts[farmName]
    //     let farm = await Farm.find({ name: farmName }, (err, obj) => {
    //         // console.log(obj)
    //     })
    //     console.log(ObjectId.isValid(farm[0]._id))
    //     let newProduct = {
    //         price: 1,
    //         quantity: 1,
    //         name: '',
    //         farm: ObjectId(farm[0]._id),
    //         categories: [],
    //         description: ''
    //     }
    //     products.forEach(async product => {
    //         newProduct = {
    //             ...newProduct,
    //             name: product
    //         }
    //         let insertedProduct = await Product.create(newProduct)
    //         await Farm.findByIdAndUpdate(farm[0]._id, {
    //             $push: { products: insertedProduct._id }
    //         }, { new: true })
    //     })
    //     // await Product.insertMany
    //     // console.log(emptyFarm)
    // }

    process.exit(0)
}


main()