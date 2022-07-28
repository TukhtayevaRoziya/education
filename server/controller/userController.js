const {UserModel} = require('../model/user')



exports.user = {
    
    upload:async(req, res)=>{
        let r = req.body;
        console.log(r);
        try {
            const b = new UserModel({
                img:`/public/image/${req.file.filename}`,
                Ismi:r.Ismi,
                pasport_seriya:r.pasport_seriya,
                tel:r.tel,
                familiya:r.familiya,
                otasiniIsmi:r.otasiniIsmi,
                JshirRaqami:r.JshirRaqami,
                jinsi:r.jinsi,
                tugilganSanasi:r.tugilganSanasi,
                yashashManzili:r.yashashManzili,
                tumanlar:r.tumanlar,
                Mahalla:r.Mahalla,
                kocha:r.kocha,
                uyRaqami:r.uyRaqami,
                tugallanganTalimMuossasasi:r.tugallanganTalimMuossasasi,
                talimShakli:r.talimShakli,
                talimTili:r.talimTili,
                talimDarajasi:r.talimDarajasi,
                MutahasislikNomi:r.MutahasislikNomi
            })
            const data =  await b.save()
            res.send({
                status: 200, 
                user:data,
                message:"Succcessfully added"
            })
        } catch (e) {
            console.log(e);
             res.send({
               status: 500,
               message: "Internal server error",
             });
        }
    },
    getUpdate:async(req, res)=>{
        try {
            const upd = await UserModel.findByIdAndUpdate({_id: req.params.id})
            upd.Ismi=r.Ismi,
            upd.pasport_seriya=r.pasport_seriya,
            upd.tel=r.tel,
            upd.familiya=r.familiya,
            upd.otasiniIsmi=r.otasiniIsmi,
            upd.JshirRaqami=r.JshirRaqami,
            upd.jinsi=r.jinsi,
            upd.tugilganSanasi=r.tugilganSanasi,
            upd.yashashManzili=r.yashashManzili,
            upd.tumanlar=r.tumanlar,
            upd.Mahalla=r.Mahalla,
            upd.kocha=r.kocha,
            upd.uyRaqami=r.uyRaqami,
            upd.tugallanganTalimMuossasasi=r.tugallanganTalimMuossasasi,
            upd.talimShakli=r.talimShakli,
            upd.talimTili=r.talimShakli,
            upd.talimDarajasi=r.talimDarajasi,
            upd.MutahasislikNomiBakalavrKunduzgiRu=r.MutahasislikNomiBakalavrKunduzgiRu,
            upd.MutahasislikNomiBakalavrKunduzgiEn=r.MutahasislikNomiBakalavrKunduzgiEn,
            upd.MutahasislikNomiBakalavrSirtqiRu=r.MutahasislikNomiBakalavrSirtqiRu,
            upd.MutahasislikNomiMagisterRu=r.MutahasislikNomiMagisterRu,
            upd.MutahasislikNomiMagisterEn=r.MutahasislikNomiMagisterEn
            upd.img = req.body.img
            await upd.save()
            res.json(upd)
        } catch (e) {
            console.log(e, "err")
        }
    }
}