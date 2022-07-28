const {UserModel} = require('../model/user')
const Users = {
    getAll:async(_, res)=>{
        try {
            const data = await UserModel.find();
           
            res.send(data)
        } catch (e) {
            console.log(e)
        }
    },
    getbyId:async(req, res)=>{
        try {
            const {id} = req.params
            const dataOne = await UserModel.findById(id)
            res.send(dataOne)
        } catch (e) {
            console.log(e)
            res.send({
                status: 404,
                message:"data not found"
            })
        }
    },
    // Jinsi:async(req, res)=>{
    //     try {
    //         const { jinsi } = req.query;
    //         const users = await UserModel.findOne({ jinsi: jinsi })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // yashashManzili:async(req, res)=>{
    //     try {
    //         const { yashashManzili } = req.query;
    //         const users = await UserModel.findOne({ yashashManzili: yashashManzili })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // talimShakli:async(req, res)=>{
    //     try {
    //         const users = await UserModel.findOne({ talimShakli: talimShakli })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // talimTili:async(req, res)=>{
    //     try {
    //         const { talimTili } = req.query;
    //         const users = await User.findOne({ talimTili: talimTili })
           
    //         res.send(g)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // talimDarajasi:async(req, res)=>{
    //     try {
    //         const { talimDarajasi } = req.query;

    //         const users = await UserModel.findOne({ talimDarajasi: talimDarajasi })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // MutahasislikNomiBakalavrKunduzgiRu:async(req, res)=>{
    //     try {
    //         const { MutahasislikNomiBakalavrKunduzgiRu } = req.query;

    //         const users = await UserModel.findOne({ MutahasislikNomiBakalavrKunduzgiRu: MutahasislikNomiBakalavrKunduzgiRu })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // MutahasislikNomiBakalavrKunduzgiEn:async(req, res)=>{
    //     try {
    //         const { MutahasislikNomiBakalavrKunduzgiEn } = req.query;

    //         const users = await UserModel.findOne({ MutahasislikNomiBakalavrKunduzgiEn: MutahasislikNomiBakalavrKunduzgiEn })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // MutahasislikNomiBakalavrSirtqiRu:async(req, res)=>{
    //     try {
    //         const { MutahasislikNomiBakalavrSirtqiRu } = req.query;
    //         const users = await UserModel.findOne({ MutahasislikNomiBakalavrSirtqiRu: MutahasislikNomiBakalavrSirtqiRu })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // MutahasislikNomiMagisterRu:async(req, res)=>{
    //     try {
    //         const { MutahasislikNomiMagisterRu } = req.query;

    //         const users = await UserModel.findOne({ MutahasislikNomiMagisterRu: MutahasislikNomiMagisterRu })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // MutahasislikNomiMagisterEn:async(req, res)=>{
    //     try {
    //         const { MutahasislikNomiMagisterEn } = req.query;

    //         const users = await UserModel.findOne({ MutahasislikNomiMagisterEn: MutahasislikNomiMagisterEn })
           
    //         res.send(users)
    //     } catch (e) {
    //         console.log(e)
    //     } 
    // },
    // getDelete:async(req, res)=>{
    //     try {
            
    //         const aa = await UserModel.findByIdAndDelete({_id: req.params.id})
    //         res.send(aa)
    //     } catch (e) {
    //         console.log(e, "err")
    //     }
    // }

}
module.exports = {
    Users
}