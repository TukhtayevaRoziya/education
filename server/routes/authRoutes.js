const express = require('express')
const router = express.Router()
const {Users} = require('../controller/auth')
const { user } = require("../controller/userController");
const {upload}  = require('./userRoutes')



// router.post('/add', upload.single('img'), Users.upload)
router.post("/add", upload.single("img"), user.upload);
router.get("/all", Users.getAll);
router.get('/user/:id', Users.getbyId);
router.put("/user/:id", user.getUpdate);
// router.get('/Jinsi', Users.Jinsi)
// router.get('/yashashManzili', Users.yashashManzili)
// router.get('/talimShakli', Users.talimShakli)
// router.get('/talimTili', Users.talimTili)
// router.get('/talimDarajasi', Users.talimDarajasi)
// router.get('/MutahasislikNomiBakalavrKunduzgiRu', Users.MutahasislikNomiBakalavrKunduzgiRu)
// router.get('/MutahasislikNomiBakalavrKunduzgiEn', Users.MutahasislikNomiBakalavrKunduzgiEn)
// router.get('/MutahasislikNomiBakalavrSirtqiRu', Users.MutahasislikNomiBakalavrSirtqiRu)
// router.get('/MutahasislikNomiMagisterRu', Users.MutahasislikNomiMagisterRu)
// router.get('/MutahasislikNomiMagisterEn', Users.MutahasislikNomiMagisterEn)
// router.delete('/getDelete', Users.getDelete)

module.exports = router


