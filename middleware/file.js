const multer = require('multer')
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'images111')
    },
    filename(req, file, cb){
        cb(null, uuidv4() + '-' + file.originalname)
    }
})

const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({
     storage: storage,
     fileFilter: fileFilter
})