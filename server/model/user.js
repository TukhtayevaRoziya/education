const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
   
    Ismi:{
        type: String ,
        default:''   
    },
    pasport_seriya:{
        type: Number,
        default:""
    },
    img:{
        type: String , 
        default:''
     },
    tel:{
        type: String ,
        default:''
    },
    familiya:{
        type: String ,
        default:''   
    },
    otasiniIsmi:{
        type: String ,
        default:''  
    },
    JshirRaqami:{
        type: String,
        default:''
    },
    jinsi:{
        type: String ,
        default:'',
        enum:['erkak', 'ayol'], // filter bor
        default:'erkak'
    },
    tugilganSanasi:{
        type: String, 
        default:''
    },
    yashashManzili:{
        type: String ,
        default:'Andijon', // filter bor
        enum:['Toshkent','Andijon','Namangan','Farg`ona','Jizzah','Navoiy','Buhoro','Qashqadaryo','Surxondaryo','Sirdaryo', 'Jizzax','Samarqand','Qoraqolpog`iston']},
    tumanlar:{
        type: String ,
        default:'Asaka',
        enum:['Oq oltin', 'Oltinko`l', 'Andijon','Asaka','Ohunboboev', 'Baliqchi','Bo`z', 'Buloqboshi', 'Qorasuv','Kuyganyor','Qo`rgo`ntepa','Marhamat','Poytug`','Pahtaobod', 'Shahrihon','Xonobod','Xodjabod',// Andijon
         'Olot','Buhoro','Galaosiyo','Gazli','G`ijduvon','Kogon','Qorako`l','Qorovulbozor','Romitan','Shofirkon','Vobkent','Jondor',// Buhoro
        'Aydarko`l','Balandchaqir','Dashtobod','Dostlik','Jizzax','Gagarin','G`allaorol','G`oliblar','Marjonbuloq','Pahtakor','Uchtepa','O`smat','Yangiqishloq','Zomin','Zafarobod','Zarbdor',// Jizzax
        'Oqmangit','Beruniy','Bo`ston','Chimboy','Qanliko`l','Qorao`zak','Kegeyli','Qo`ng`irot','Mang`it','Mo`ynoq','Nukus','Shumanay','Taxiatosh','Taxtako`pir','To`rtko`l','Xo`jayli',// Qoraqalpog'iston R
       'Beshkent','Chiroqchi','Dehqonobod','G`uzor','Qamashi','Karashina','Qarshi','Koson','Kasbi','Kitob','Muborak','Mug`lon','Shahrisabz','Talimarjon',"Yakkabog'",'Mirishkor','Nishon',// Qashqadariyo
        'Beshrobot','Konimex','Karmana','Qiziltepa','Navoiy','Nurota','Tomdibuloq','Uchquduq','Yangirobot','Zarafshon',// Navoiy
        'Chortoq','Chust','Jomasho`y','Kosonsoy','Namangan','Pop','Toshbuloq','To`raqo`rg`on','Uchqo`rg`on','Xaqqulabod',// Namangan
        'Oqtosh','Bulung`ur','Chelak','Darband','Jumboy','Juma','Go`zalkent','Gulobod','Ishtihon','Kattaqo`rg`on','Qo`shrobod','Loish','Nurobod','Payariq','Payshanba','Samarqand','Tayloq','Urgut','Ziadin',//Samarqand
       'Angor','Boysun','Bandixon','Denov','Jarqo`rg`on','Qorlik','Qiziriq','Qumqo`rg`on','Muzrobod','Sariosiyo','Sariq','Sharg`un','Sherobod','Sho`rchi','Termiz','Uchqizil','Uzun','Xalqobod', //Surxondaryo 
        'Baxt','Boyovut','Sirdaryo','Guliston','Navro`z','Sayxun','Sardoba','Shirin','Sirdaryo','Terenozek','Xovos','Yangiyer',//Sirdaryo 
        'Oqqo`rg`on','Olmaliq','Angren','Ohangaron','Bekobod','Katta Chimyon','Bo`ka','Chorvoq','Chinoz','Chirchiq','So`qoq','Durmen','Do`stobod','Eshonguzar','G`azalkent','Gulbahor','Iskandar','Qorasuv','Keles','Qibray',//Toshkent
       'Ko`ksaroy','Krasnogorsk','Mirobod','Nazarbek','To`ytepa','Parkent','Pskent','Salar','Toshkent shahar','Tashmore','Turkiston','O`rtaovul','Xo`jakent','Yangiobod','Yangibozor','Yangiyo`l','Zafar','Zangiota' ]//Toshkent
    },
    Mahalla:{
        type: String ,
        default:''   
    },
    kocha:{
        type: String ,
        default:''
    },
    uyRaqami:{
        type: Number, 
        default:''
    },
    tugallanganTalimMuossasasi:{
        type:String
     },
    talimShakli:{
        type: String ,
        default:'',
        enum:['Kunduzgi','Kechgi'], // filter bor
        default:'Kunduzgi'
    },
    talimTili:{
        type: String ,
        default:'',
        enum:['Rus','Eng'], // filter bor
        default:'ru'
    },
    talimDarajasi:{ // filter bor
        type: String ,
        default:'',
        enum:['Bakalavr','Magister',''],
        default:''
    },
    MutahasislikNomi :{ // filter bor
        type: String,
        default:'',
//         enum:['Oziq-ovqat texnologiyasi (non, makron va kandolatchilik mahsulotlari)','Funksional ovqatlanish va bolalar maxsulotlari tahnologiyasi',// one ru
//  'Озиқ-овқат саноати машина ва жиҳозлари','Технологик машиналар ва жиҳозлар (совутиш, криоген техникаси ва мўътадиллаш тизимлари машиналари ҳамда агрегатлари )','Технологик машиналар ва жиҳозлар (тармоқлар бўйича)',//second ru
//  'Материалшунослик ва янги материаллар технологияси (тармоқлар бўйича)','Кимёвий технология (қурилиш материаллар)','Нефть газкимё саноати технологияси',// three  ru
// 'Мехатроника ва робототехника','Машинасозлик технологияси, машинасозлик ишлаб чиқаришини жиҳозлаш ва автоматлаштириш',// four  ru
// 'Меҳнат муҳофазаси ва янги материаллар технологияси (тармоқлар бўйича)',// kun alohida, ru
// 'Нефть ва нефть-газни қайта ишлаш технологияси',//kun alohida ru + MAGISTER
// 'Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш',// kun alohida ru + MAGISTER
// 'Транспорт логистикаси (автомобил транспорти)',// kun alohida ru
// 'Озиқ-овқат технологияси (маҳсулот турлари бўйича)',// kun alohida en
// 'Озиқ-овқат технологияси (маҳсулот турлари бўйича)',// kun alohida en
// 'Озиқ-овқат технологияси (дон маҳсулотлари)','Виночилик технологияси, бижғиш маҳсулотлари ва алкоголсиз ичимликлар технологияси', // sirtqi ru
// 'Технологик машиналар ва жиҳозлар (тармоқлар бўйича) ', // sirtqi ru
// 'Кимёвий технология (ишлаб чиқариш турлари бўйича) ',// sirtqi ru
// 'Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш ва бошқариш (тармоқлар бўйича) ',// sirtqi ru
// "Нефт ва газни қайта ишлаш ва кимёвий технологияси ","Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш",// One ru
// "Озиқ-овқат маҳсулотларини ишлаб чиқариш ва қайта ишлаш технологияси (маҳсулот турлари бўйича)"/* + MAGISTER*/,"Хизматлар соҳаси (фаолият турлари ва йўналишлари бўйича)",/* + MAGISTER*/// two ru
// "Озиқ-овқат саноати машина ва агрегатлари "/* + MAGISTER*/,"Кимёвий технология жараёнлари ва аппаратлари (ишлаб чиқариш тури бўйича)"/* + MAGISTER*/,// three ru
// "Озиқ-овқат хавфсизлиги ва сифати"/* + MAGISTER eng*/,"Latviya"/* + MAGISTER eng*/,// four en
// "Ёғочга ишлов бериш технологияси ва ёғочшунослик "/* + MAGISTER eng*/ // alohida ru {BELGILANMADI}
//         ]
    },
date:{
    type: Date,
    default:Date.now()
}
})  
const UserModel = model('User', UserSchema);
module.exports ={UserModel}