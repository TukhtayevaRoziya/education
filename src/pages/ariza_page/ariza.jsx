import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import React, { useState, useEffect, useContext, useRef } from "react";
import { Context as LanguageContext } from "../../Context/Language";
import context from "../../lang/lang";
import "./ariza.css";
import ParticlesBg from "particles-bg";
import axios from "axios";
import { useNavigate } from "react-router";
import Logo from "../../images/logo.png";
import jsPDF from "jspdf";

function populate(s1, s2) {
  var s1 = document.getElementById("slct1");
  var s2 = document.getElementById("slct2");

  s2.innerHTML = "";

  if (s1.value == "Toshkent") {
    var optionArray = [
      "Oqqo`rg`on|Oqqo`rg`on",
      "Olmaliq|Olmaliq",
      "Angren|Angren",
      "Ohangaron|Ohangaron",
      "Bekobod|Bekobod",
      "Katta Chimyon|Katta Chimyon",
      "Bo`ka|Bo`ka",
      "Chorvoq|Chorvoq",
      "Chinoz|Chinoz",
      "Chirchiq|Chirchiq",
      "So'qoq|So'qoq",
      "Durmen|Durmen",
      "Do'stobod|Do'stobod",
      "Eshonguzar|Eshonguzar",
      "G`azalkent|G`azalkent",
      "Gulbahor|Gulbahor",
      "Iskandar|Iskandar",
      "Qorasuv|Qorasuv",
      "Keles|Keles",
      "Qibray|Qibray",
      "Ko`ksaroy|Ko`ksaroy",
      "Krasnogorsk|Krasnogorsk",
      "Mirobod|Mirobod",
      "Nazarbek|Nazarbek",
      "To`ytepa|To`ytepa",
      "Parkent|Parkent",
      "Pskent|Pskent",
      "Salar|Salar",
      "Toshkent shahar|Toshkent shahar",
      "Tashmore|Tashmore",
      "Turkiston|Turkiston",
      "O`rtaovul|O`rtaovul",
      "Xo`jakent|Xo`jakent",
      "Yangiobod|Yangiobod",
      "Yangibozor|Yangibozor",
      "Yangiyo`l|Yangiyo`l",
      "Zafar|Zafar",
      "Zangiota|Zangiota",
    ]; //Toshkent];
  } else if (s1.value == "Surxondaryo") {
    var optionArray = [
      "Angor|Angor",
      "Boysun|Boysun",
      "Bandixon|Bandixon",
      "Denov|Denov",
      "Jarqo`rg`on|Jarqo`rg`on",
      "Qorlik|Qorlik",
      "Qiziriq|Qiziriq",
      "Qumqo`rg`on|Qumqo`rg`on",
      "Muzrobod|Muzrobod",
      "Sariosiyo|Sariosiyo",
      "Sariq|Sariq",
      "Sharg`un|Sharg`un",
      "Sherobod|Sherobod",
      "Sho`rchi|Sho`rchi",
      "Termiz|Termiz",
      "Uchqizil|Uchqizil",
      "Uzun|Uzun",
      "Xalqobod|Xalqobod",
    ];
  } else if (s1.value == "Andijon") {
    var optionArray = [
      "Oq oltin|Oq oltin",
      "Oltinko`l|Oltinko`l",
      "Andijon|Andijon",
      "Asaka|Asaka",
      "Ohunboboev|Ohunboboev",
      "Baliqchi|Baliqchi",
      "Bo`z|Bo`z",
      "Buloqboshi|Buloqboshi",
      "Qorasuv|Qorasuv",
      "Kuyganyor|Kuyganyor",
      "Qo`rg`ontepa|Qo`rg`ontepa",
      "Marhamat|Marhamat",
      "Poytug`|Poytug`",
      "Pahtaobod|Pahtaobod",
      "Shahrihon|Shahrihon",
      "Xonobod|Xonobod",
      "Xodjabod|Xodjabod",
    ];
  } else if (s1.value == "Namangan") {
    var optionArray = [
      "Chortoq|Chortoq",
      "Chust|Chust",
      "Jomasho`y|Jomasho`y",
      "Kosonsoy|Kosonsoy",
      "Namangan|Namangan",
      "Pop|Pop",
      "Toshbuloq|Toshbuloq",
      "To`raqo`rg`on|To`raqo`rg`on",
      "Uchqo`rg`on|Uchqo`rg`on",
      "Xaqqulabod|Xaqqulabod",
    ];
  } else if (s1.value == "Samarqand") {
    var optionArray = [
      "Oqtosh|Oqtosh",
      "Bulung`ur|Bulung`ur",
      "Chelak|Chelak",
      "Darband|Darband",
      "Jumboy|Jumboy",
      "Juma|Juma",
      "Go`zalkent|Go`zalkent",
      "Gulobod|Gulobod",
      "Ishtihon|Ishtihon",
      "Kattaqo`rg`on|Kattaqo`rg`on",
      "Qo`shrobod|Qo`shrobod",
      "Loish|Loish",
      "Nurobod|Nurobod",
      "Payariq|Payariq",
      "Payshanba|Payshanba",
      "Samarqand|Samarqand",
      "Tayloq|Tayloq",
      "Urgut|Urgut",
      "Ziadin|Ziadin",
    ];
  } else if (s1.value == "Sirdaryo") {
    var optionArray = [
      "Baxt|Baxt",
      "Boyovut|Boyovut",
      "Sirdaryo|Sirdaryo",
      "Guliston|Guliston",
      "Navro`z|Navro`z",
      "Sayxun|Sayxun",
      "Sardoba|Sardoba",
      "Shirin|Shirin",
      "Sirdaryo|Sirdaryo",
      "Terenozek|Terenozek",
      "Xovos|Xovos",
      "Yangiyer|Yangiyer",
    ];
  } else if (s1.value == "Navoiy") {
    var optionArray = [
      "Beshrobot|Beshrobot",
      "Konimex|Konimex",
      "Karmana|Karmana",
      "Qiziltepa|Qiziltepa",
      "Navoiy|Navoiy",
      "Nurota|Nurota",
      "Tomdibuloq|Tomdibuloq",
      "Uchquduq|Uchquduq",
      "Yangirobot|Yangirobot",
      "Zarafshon|Zarafshon",
    ];
  } else if (s1.value == "Qashqadaryo") {
    var optionArray = [
      "Beshkent|Beshkent",
      "Chiroqchi|Chiroqchi",
      "Dehqonobod|Dehqonobod",
      "G`uzor|G`uzor",
      "Qamashi|Qamashi",
      "Karashina|Karashina",
      "Qarshi|Qarshi",
      "Koson|Koson",
      "Kasbi|Kasbi",
      "Kitob|Kitob",
      "Muborak|Muborak",
      "Mug`lon|Mug`lon",
      "Shahrisabz|Shahrisabz",
      "Talimarjon|Talimarjon",
      "Yakkabog|Yakkabog'",
      "Mirishkor|Mirishkor",
      "Nishon|Nishon",
    ];
  } else if (s1.value == "Qoraqolpog`iston") {
    var optionArray = [
      "Oqmangit|Oqmangit",
      "Beruniy|Beruniy",
      "Bo`ston|Bo`ston",
      "Chimboy|Chimboy",
      "Qanliko`l|Qanliko`l",
      "Qorao`zak|Qorao`zak",
      "Kegeyli|Kegeyli",
      "Qo`ng`irot|Qo`ng`irot",
      "Mang`it|Mang`it",
      "Mo`ynoq|Mo`ynoq",
      "Nukus|Nukus",
      "Shumanay|Shumanay",
      "Taxiatosh|Taxiatosh",
      "Taxtako`pir|Taxtako`pir",
      "To`rtko`l|To`rtko`l",
      "Xo`jayli|Xo`jayli",
    ];
  } else if (s1.value == "Jizzax") {
    var optionArray = [
      "Aydarko`l|Aydarko`l",
      "Balandchaqir|Balandchaqir",
      "Dashtobod|Dashtobod",
      "Dostlik|Dostlik",
      "Jizzax|Jizzax",
      "Gagarin|Gagarin",
      "G`allaorol|G`allaorol",
      "G`oliblar|G`oliblar",
      "Marjonbuloq|Marjonbuloq",
      "Pahtakor|Pahtakor",
      "Uchtepa|Uchtepa",
      "O`smat|O`smat",
      "Yangiqishloq|Yangiqishloq",
      "Zomin|Zomin",
      "Zafarobod|Zafarobod",
      "Zarbdor|Zarbdor",
    ];
  } else if (s1.value == "Buhoro") {
    var optionArray = [
      "Olot|Olot",
      "Buhoro|Buhoro",
      "Galaosiyo|Galaosiyo",
      "Gazli|Gazli",
      "G`ijduvon|G`ijduvon",
      "Kogon|Kogon",
      "Qorako`l|Qorako`l",
      "Qorovulbozor|Qorovulbozor",
      "Romitan|Romitan",
      "Shofirkon|Shofirkon",
      "Vobkent|Vobkent",
      "Jondor|Jondor",
    ];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}

function faculty(f1, f2, f3, f4) {
  var f1 = document.getElementById("fak");
  var f2 = document.getElementById("taltil");
  var f3 = document.getElementById("talshak");
  var f4 = document.getElementById("taldar");

  f1.innerHTML = "";

  if (f2.value == "Rus" && f3.value == "Kunduzgi" && f4.value == "Bakalavr") {
    var optionArray = [
      "Меҳнат муҳофазаси ва янги материаллар технологияси (тармоқлар бўйича)|Меҳнат муҳофазаси ва янги материаллар технологияси (тармоқлар бўйича)",
      "Нефть ва нефть-газни қайта ишлаш технологияси|Нефть ва нефть-газни қайта ишлаш технологияси",
      "Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш|Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдалани",
      "Транспорт логистикаси (автомобил транспорти)|Транспорт логистикаси (автомобил транспорти)",
      "Funksional ovqatlanish va bolalar maxsulotlari texnologiyasi|Funksional ovqatlanish va bolalar maxsulotlari texnologiyasi",
      "Oziq-ovqat texnologiyasi (non, makron va kandolatchilik mahsulotlari)|Oziq-ovqat texnologiyasi (non, makron va kandolatchilik mahsulotlari)",
      "Озиқ-овқат саноати машина ва жиҳозлари|Озиқ-овқат саноати машина ва жиҳозлари",
      "Технологик машиналар ва жиҳозлар (совутиш, криоген техникаси ва мўътадиллаш тизимлари машиналари ҳамда агрегатлари)|Технологик машиналар ва жиҳозлар (совутиш, криоген техникаси ва мўътадиллаш тизимлари машиналари ҳамда агрегатлари)",
      "Технологик машиналар ва жиҳозлар (тармоқлар бўйича)|Технологик машиналар ва жиҳозлар (тармоқлар бўйича)",
      "Материалшунослик ва янги материаллар технологияси (тармоқлар бўйича)|Материалшунослик ва янги материаллар технологияси (тармоқлар бўйича)",
      "Кимёвий технология (қурилиш материаллар)|Кимёвий технология (қурилиш материаллар)",
      "Нефть газкимё саноати технологияси|Нефть газкимё саноати технологияси",
      "Мехатроника ва робототехника|Мехатроника ва робототехника",
      "Машинасозлик технологияси, машинасозлик ишлаб чиқаришини жиҳозлаш ва автоматлаштириш|Машинасозлик технологияси, машинасозлик ишлаб чиқаришини жиҳозлаш ва автоматлаштириш",
      "Озиқ-овқат технологияси (маҳсулот турлари бўйича)|Озиқ-овқат технологияси (маҳсулот турлари бўйича)",
    ];
  } else if (
    f2.value == "Rus" &&
    f3.value == "Kechki" &&
    f4.value == "Bakalavr"
  ) {
    var optionArray = [
      "Озиқ-овқат технологияси (дон маҳсулотлари)|Озиқ-овқат технологияси (дон маҳсулотлари)",
      "Виночилик технологияси, бижғиш маҳсулотлари ва алкоголсиз ичимликлар технологияси|Виночилик технологияси, бижғиш маҳсулотлари ва алкоголсиз ичимликлар технологияси",
      "Технологик машиналар ва жиҳозлар (тармоқлар бўйича)|Технологик машиналар ва жиҳозлар (тармоқлар бўйича)",
      "Кимёвий технология (ишлаб чиқариш турлари бўйича)|Кимёвий технология (ишлаб чиқариш турлари бўйича)",
      "Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш ва бошқариш (тармоқлар бўйича)|Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш ва бошқариш (тармоқлар бўйича)",
    ];
  } else if (
    f2.value == "Eng" &&
    f3.value == "Kunduzgi" &&
    f4.value == "Bakalavr"
  ) {
    var optionArray = [
      "Озиқ-овқат технологияси (маҳсулот турлари бўйича)|Озиқ-овқат технологияси (маҳсулот турлари бўйича)",
    ];
  } else if (
    f2.value == "Rus" &&
    f3.value == "Kunduzgi" &&
    f4.value == "Magistr"
  ) {
    var optionArray = [
      "Нефт ва газни қайта ишлаш ва кимёвий технологияси|Нефт ва газни қайта ишлаш ва кимёвий технологияси",
      "Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш|Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш",
      "Озиқ-овқат маҳсулотларини ишлаб чиқариш ва қайта ишлаш технологияси (маҳсулот турлари бўйича)|Озиқ-овқат маҳсулотларини ишлаб чиқариш ва қайта ишлаш технологияси (маҳсулот турлари бўйича)",
      "Хизматлар соҳаси (фаолият турлари ва йўналишлари бўйича)|Хизматлар соҳаси (фаолият турлари ва йўналишлари бўйича)",
      "Озиқ-овқат саноати машина ва агрегатлари|Озиқ-овқат саноати машина ва агрегатлари",
      "Кимёвий технология жараёнлари ва аппаратлари (ишлаб чиқариш тури бўйича)|Кимёвий технология жараёнлари ва аппаратлари (ишлаб чиқариш тури бўйича)",
    ];
  } else if (
    f2.value == "Eng" &&
    f3.value == "Kunduzgi" &&
    f4.value == "Magistr"
  ) {
    var optionArray = [
      "Озиқ-овқат хавфсизлиги ва сифати|Озиқ-овқат хавфсизлиги ва сифати",
      "Latviya|Latviya",
      "Ёғочга ишлов бериш технологияси ва ёғочшунослик|Ёғочга ишлов бериш технологияси ва ёғочшунослик",
    ];
  } else if (
    f2.value == "Eng" &&
    f3.value == "Kechki" &&
    f4.value == "Bakalavr"
  ) {
    var optionArray = [
      "Kechirasiz bu yo`nalishda fakultetlar yo`q|Kechirasiz bu yo`nalishda fakultetlar yo`q",
    ];
  } else if (
    f2.value == "Eng" &&
    f3.value == "Kechki" &&
    f4.value == "Magistr"
  ) {
    var optionArray = [
      "Kechirasiz bu yo`nalishda fakultetlar yo`q|Kechirasiz bu yo`nalishda fakultetlar yo`q",
    ];
  } else if (
    f2.value == "Rus" &&
    f3.value == "Kechki" &&
    f4.value == "Magistr"
  ) {
    var optionArray = [
      "Kechirasiz bu yo`nalishda fakultetlar yo`q|Kechirasiz bu yo`nalishda fakultetlar yo`q",
    ];
  } else if (
    f2.value == "Eng" &&
    f3.value == "Kechki" &&
    f4.value == "Magistr"
  ) {
    var optionArray = [
      "Kechirasiz bu yo`nalishda fakultetlar yo`q|Kechirasiz bu yo`nalishda fakultetlar yo`q",
    ];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    f1.options.add(newoption);
  }
}

function fakultet() {
  var fak = document.getElementById("fak");
  var fakhaqida = document.getElementById("fakunvhaqida");
  if (
    fak.value ==
      "Oziq-ovqat texnologiyasi (non, makron va kandolatchilik mahsulotlari)" &&
    fak.value == "Озиқ-овқат саноати машина ва жиҳозлари" &&
    fak.value == "Funksional ovqatlanish va bolalar maxsulotlari texnologiyasi"
  ) {
    fakhaqida.innerText =
      "Belarussiya davlat oziq-ovqat va kimyoviy texnalogiyalar universiteti, Belarus Respublikasi";
  } else {
    fakhaqida.innerText = "Fakultet tanlang";
  }
}

function submitpdf() {
  var ism = document.getElementById("ism").value;
  var familiya = document.getElementById("familiya").value;
  var otaism = document.getElementById("otaism").value;
  var pas = document.getElementById("pas").value;
  var pasberjoy = document.getElementById("pasberjoy").value;
  var talshak = document.getElementById("talshak").value;
  var taltil = document.getElementById("taltil").value;
  var taldar = document.getElementById("taldar").value;
  var fak = document.getElementById("fak").value;

  var ifojoy = document.getElementById("abitur-ifo");
  var passer = document.getElementById("pas-ser");
  var pasber = document.getElementById("pas-ber");
  var talshakjoy = document.getElementById("talshak-joy");
  var taldarjoy = document.getElementById("taldar-joy");
  var taltiljoy = document.getElementById("taltil-joy");
  var yonalishjoy = document.getElementById("yonalishjoy");

  ifojoy.innerHTML = ism + " " + familiya + " " + otaism;
  passer.innerHTML = "Pasport: " + pas;
  pasber.innerHTML = "Kim tomonidan berilgan : " + pasberjoy;
  talshakjoy.innerHTML = "Ta`lim shakli : " + talshak;
  taltiljoy.innerHTML = "Ta`lim tili : " + taltil;
  taldarjoy.innerHTML = "Ta`lim darajasi : " + taldar;
  yonalishjoy.innerHTML = "Yo`nalish : " + fak;

  var doc = new jsPDF("p", "pt", "a2");
  doc.html(document.getElementById("pdf-qushmatalim"), {
    callback: function (pdf) {
      pdf.save("mypdf.pdf");
    },
  });
}

function Ariza() {
  const [respond, setRespond] = useState("Successfully registered!");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      Ismi,
      familiya,
      otasiniIsmi,
      tel,
      JshirRaqami,
      pasberjoy,
      tugilganSanasi,
      jinsi,
      yashashManzili,
      tumanlar,
      Mahalla,
      kocha,
      uyRaqami,
      img,
      tugallanganTalimMuossasasi,
      talimShakli,
      talimTili,
      talimDarajasi,
      MutahasislikNomi,
    } = e.target.elements;
    console.log(
      Ismi.value,
      familiya.value,
      otasiniIsmi.value,
      tel.value,
      JshirRaqami.value,
      pasberjoy.value,
      tugilganSanasi.value,
      jinsi.value,
      yashashManzili.value,
      tumanlar.value,
      Mahalla.value,
      kocha.value,
      uyRaqami.value,
      img.value,
      tugallanganTalimMuossasasi.value,
      talimShakli.value,
      talimTili.value,
      talimDarajasi.value,
      MutahasislikNomi.value
    );
    const formData = new FormData();
    formData.append("Ismi", Ismi.value);
    formData.append("familiya", familiya.value);
    formData.append("otasiniIsmi", otasiniIsmi.value);
    formData.append("tel", tel.value);
    formData.append("JshirRaqami", JshirRaqami.value);
    formData.append("pasberjoy", pasberjoy.value);
    formData.append("tugilganSanasi", tugilganSanasi.value);
    formData.append("jinsi", jinsi.value);
    formData.append("yashashManzili", yashashManzili.value);
    formData.append("tumanlar", tumanlar.value);
    formData.append("Mahalla", Mahalla.value);
    formData.append("kocha", kocha.value);
    formData.append("uyRaqami", uyRaqami.value);
    formData.append("img", img.files[0]);
    formData.append(
      "tugallanganTalimMuossasasi",
      tugallanganTalimMuossasasi.value
    );
    formData.append("talimShakli", talimShakli.value);
    formData.append("talimTili", talimTili.value);
    formData.append("talimDarajasi", talimDarajasi.value);
    formData.append("MutahasislikNomi", MutahasislikNomi.value);

    axios({
      method: "POST",
      url: "https://univer1216.herokuapp.com/add",
      data: formData,
    }).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        setRespond("Successfully registered!");
        setType("alert__success");
        setTimeout(() => {
          setType("");
        }, 5000);
        setTimeout(() => {
          navigate(`/user/${res.data.user._id}`);
        }, 2000);
      } else {
        setRespond("Iltimos Ma'lumotlarni to'gri va to'liq kiriting!");
        setType("alert__error");
        setTimeout(() => {
          setType("");
        }, 5000);
      }
    });
  };

  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    const rasm = document.getElementById("kochaa");
    rasm.value = base64;
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="container-ariza">
      <ParticlesBg color="#0d3b66" type="cobweb" num={150} bg={true} />
      <Header />
      <div className="container-qabul">
        <form
          className="wrapper-qabul"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="POST"
        >
          <div className="inputs-wrapper">
            <label htmlFor="">Ismingiz :</label>
            <input type="text" name="Ismi" id="ism" />
            <label htmlFor="familiya">Familiyangiz :</label>
            <input type="text" name="familiya" id="familiya" />
            <label htmlFor="otaism">Otangizning ismi :</label>
            <input type="text" name="otasiniIsmi" id="otaism" />
            <label htmlFor="telefon">Telefon raqamingiz :</label>
            <input type="tel" name="tel" id="telefon" />
            <label htmlFor="pas">Passport JSHIR :</label>
            <input type="text" name="JshirRaqami" id="pas" />
            <label htmlFor="pasberjoy">Passport berilgan joyi :</label>
            <input type="text" name="pasberjoy" id="pasberjoy" />
            <label htmlFor="unvkirgan">Tug`ilgan sanangiz :</label>
            <input type="date" name="tugilganSanasi" id="unvkirgan" />
            <p>Jinsingiz :</p>
            <div id="form">
              <input type="radio" name="jinsi" value={"erkak"} id="akatatha" />
              <label htmlFor="akatatha">Erkak</label>
              <input type="radio" name="jinsi" value={"ayol"} id="akatatyoq" />
              <label htmlFor="akatatyoq">Ayol</label>
            </div>
            <div className="address">
              <label htmlFor="salom">Viloyatni tanlang :</label>
              <select name="yashashManzili" id="slct1" onChange={populate}>
                <option value="" selected disabled>
                  {" "}
                  Viloyatni tanlang :
                </option>
                <option value="Toshkent">Toshkent</option>
                <option value="Surxondaryo">Surxondaryo</option>
                <option value="Andijon">Andijon</option>
                <option value="Namangan">Namangan</option>
                <option value="Samarqand">Samarqand</option>
                <option value="Sirdaryo">Sirdaryo</option>
                <option value="Navoiy">Navoiy</option>
                <option value="Jizzax">Jizzax</option>
                <option value="Buhoro">Buhoro</option>
                <option value="Qashqadaryo">Qashqadaryo</option>
                <option value="Qoraqolpog`iston">Qoraqolpog`iston R.</option>
              </select>
              <label for="">Tumanni tanlang :</label>
              <select name="tumanlar" id="slct2"></select>
            </div>
          </div>
          <div className="inputs-wrapper">
            <label htmlFor="mfy">Mahalla va ko`chani kiriting :</label>
            <input type="text" name="Mahalla" id="mfy" />
            <input type="text" name="kocha" id="kochaa" />
            <label htmlFor="mfy">Uy raqamini kiriting :</label>
            <input type="number" name="uyRaqami" id="mfy" />
            <label htmlFor="rasm">3x4 rasmingizni joylang :</label>
            <input
              type="file"
              name="img"
              id="rasm"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
            <label htmlFor="tugtalmuas">
              Tugallangan ta`lim muassasasini kiriting :
            </label>
            <input
              type="text"
              name="tugallanganTalimMuossasasi"
              id="tugtalmuas"
            />
            <label htmlFor="talshak">Talim shaklini tanlang : </label>
            <select name="talimShakli" id="talshak" onChange={faculty}>
              <option value="" selected disabled>
                Ta`lim shakli
              </option>
              <option value="Kunduzgi">Kunduzgi</option>
              <option value="Kechki">Kechki</option>
            </select>
            <label htmlFor="taltil">Talim tilini tanlang : </label>
            <select name="talimTili" id="taltil" onChange={faculty}>
              <option value="" selected disabled>
                Ta`lim tili
              </option>
              <option value="Rus">Rus tili</option>
              <option value="Eng">Ingliz tili</option>
            </select>
            <label htmlFor="taldar">Talim darajasini tanlang : </label>
            <select name="talimDarajasi" id="taldar" onChange={faculty}>
              <option value="" selected disabled>
                Ta`lim darajasi
              </option>
              <option value="Bakalavr">Bakalavr</option>
              <option value="Magister">Magistr</option>
            </select>
            <label htmlFor="fak">Fakultetni kiriting :</label>
            <select
              name="MutahasislikNomi"
              id="fak"
              onChange={fakultet}
            ></select>
            <p className={`alert__text  ${type}`}>{respond}</p>
            <button type="submit" id="submit" onClick={submitpdf}>
              Submit
            </button>
            <h5 id="fakunvhaqida"></h5>
          </div>
        </form>
      </div>
      <div className="pdf-qushmatalim" id="pdf-qushmatalim">
        <div className="pdf-header">
          <div className="pdf-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="pdf-header-text">
            <h4>
              Manzil: Toshkent shahar. Navoiy ko’chasi, 32 uy, 100011 Call
              center: (998-71)244-79-20 ,(998-71)244-79-17 www.tkti.uz /
              t.me/tkti
            </h4>
          </div>
        </div>
        <div className="pdf-main">
          <div className="pdf-main-header">
            <h4>
              TOSHKENT KIMYO-TEXNOLOGILARI INSTITUTI 2022/2023 O'QUV YILI UCHUN
              ABITURIYENT QAYD ETILGANLIGI HAQIDA MA'LUMOT
            </h4>
          </div>
          <div className="pdf-main-abitur">
            <div className="pdfabout-abitur">
              <h2 id="abitur-ifo"></h2>
              <img src={baseImage} height="300px" width="250px" />
            </div>
            <div className="pas-mal">
              <h3>PASPORT MA'LUMOTLAR</h3>
              <p id="pas-ser"></p>
              <p id="pas-ber"></p>
            </div>
            <div className="tal-yonal">
              <h3>TA`LIM YONALISHI</h3>
              <div className="tal-yonal-main">
                <div className="tal-yon-til-shak">
                  <p id="taldar-joy"></p>
                  <p id="taltil-joy"></p>
                  <p id="talshak-joy"></p>
                </div>
                <div className="fak">
                  <p id="qoshmaotmjoy">Qoshma OTM</p>
                  <p id="yonalishkodijoy">Yo`nalish kodi: 12345</p>
                  <p id="yonalishjoy"></p>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="eslatma">
              <span>
                ESLATMA <br />
                Hurmatli abituriyentlar to'liq ma'lumotni quyidagi manzillar
                orqali bilib olishingiz mumkin:
              </span>
              <br /> Rasmiy sayt : http://tkti.uz,telegramdagi rasmi kanl
              t.me/tktiuz , Call center +998998190979, +998901090600
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ariza;
