const util = require('util')
const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage')
const dbConfig = require('../config/db')
const path = require('path')
require('dotenv/config')


const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"]
        
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-profile-${file.originalname}`
            return filename
        } 

        return 'idk'
    }
})

let uploadFiles = multer({ storage }).single('file')
let uploadFilesMiddleware = util.promisify(uploadFiles)

module.exports = uploadFilesMiddleware