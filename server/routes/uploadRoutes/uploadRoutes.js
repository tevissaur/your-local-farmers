const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const { Image } = require('../models')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage })

router.post('/api/uploadImage', upload.single('image'), (req, res) => {
    let obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    Image.create(obj, (err, item) => {
        if(err) {
            console.log(err)
        } 
        else {
            res.status(200).json({ message: 'file uploaded' })
        }
    })
})

module.exports = router