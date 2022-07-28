const multer = require('multer');
const path = require('path')
const md5 = require('md5');


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/image');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });




module.exports = {
    upload
}
