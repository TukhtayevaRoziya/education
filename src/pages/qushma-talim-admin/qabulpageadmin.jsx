import React, { useEffect, useState } from 'react'
import  '../qushma-talim-admin/qabulpageadmin.css'
import TopshiruvchiImg from '../qushma-talim-admin/topshiruvchiig/3.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
function sliderarizalar(){
    var slideractive = document.getElementById("activeslider");
    var arizalar = document.getElementById("arizalar");
    var oqilgan = document.getElementById("oqilgan");
    var oqilmagan = document.getElementById("oqilmagan");
    var atkaz = document.getElementById("atkaz");
    var arizalarmain = document.getElementById("arizalarmain");
    var oqilganmain = document.getElementById("oqilganmain");
    var oqilmaganmain = document.getElementById("oqilmaganmain");
    var atkazmain = document.getElementById("atkazmain");
    slideractive.style.top = "0"
    arizalar.classList.add("active");
    oqilgan.classList.remove("active");
    oqilmagan.classList.remove("active");
    atkaz.classList.remove("active");
    arizalarmain.classList.add("visible");
    oqilganmain.classList.remove("visible");
    oqilmaganmain.classList.remove("visible");
    atkazmain.classList.remove("visible");
}
function slideroqilgan(){
    var slideractive = document.getElementById("activeslider");
    slideractive.style.top = "50px"
    var arizalar = document.getElementById("arizalar");
    var oqilgan = document.getElementById("oqilgan");
    var oqilmagan = document.getElementById("oqilmagan");
    var atkaz = document.getElementById("atkaz");
    var arizalarmain = document.getElementById("arizalarmain");
    var oqilganmain = document.getElementById("oqilganmain");
    var oqilmaganmain = document.getElementById("oqilmaganmain");
    var atkazmain = document.getElementById("atkazmain");
    arizalar.classList.remove("active");
    oqilgan.classList.add("active");
    oqilmagan.classList.remove("active");
    atkaz.classList.remove("active");
    oqilganmain.classList.add("visible");
    oqilmaganmain.classList.remove("visible");
    arizalarmain.classList.remove("visible");
    atkazmain.classList.remove("visible");
}
function slideroqilmagan(){
    var slideractive = document.getElementById("activeslider");
    slideractive.style.top = "100px"
    var arizalar = document.getElementById("arizalar");
    var oqilgan = document.getElementById("oqilgan");
    var oqilmagan = document.getElementById("oqilmagan");
    var atkaz = document.getElementById("atkaz");
    var arizalarmain = document.getElementById("arizalarmain");
    var oqilganmain = document.getElementById("oqilganmain");
    var oqilmaganmain = document.getElementById("oqilmaganmain");
    var atkazmain = document.getElementById("atkazmain");
    arizalar.classList.remove("active");
    oqilgan.classList.remove("active");
    oqilmagan.classList.add("active");
    atkaz.classList.remove("active");
    oqilmaganmain.classList.add("visible");
    oqilganmain.classList.remove("visible");
    arizalarmain.classList.remove("visible");
    atkazmain.classList.remove("visible");
}
function QabulAdmin() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://univer1216.herokuapp.com/all").then((res) => {
          setData(res.data);
          console.log(res.data);
        });
   }, [])

    return(
        <>
        <div className="container-qabuladmin">
            <div className="navbaradmin">
                <div className="categories">
                <div className="activeslider" id='activeslider'></div>
                <div className="arizalar category active" id='arizalar' onClick={sliderarizalar}><p>Barcha arizalar</p></div>
                <div className="oqilgan category" id='oqilgan' onClick={slideroqilgan}><p>To`lov qilingan</p></div>
                <div className="oqilmagan category" id='oqilmagan' onClick={slideroqilmagan}><p>To`lov qilinmagan</p></div>
                </div>
            </div>
            <div className="mainadmin">
                    <div className="arizalarmain main visible" id='arizalarmain'>
                      <h1 id='arizalarmain-header'>Barcha abituriyentlar</h1>
                        {data?.map((e,i)=> {
                            return (
                              <Link
                                to={`/user_for_admin/${e._id}`}
                                className="topshiruvchi"
                              >
                                <h3>{i + 1}</h3>
                                <img
                                  src={e.kocha}
                                  id="topshiruvchiimg"
                                />
                                <h3>
                                  {e.Ismi +
                                    " " +
                                    e.familiya +
                                    " " +
                                    e.otasiniIsmi}
                                </h3>
                                <h3>| {e.talimDarajasi}</h3>
                                <h3>| {e.talimTili}</h3>
                              </Link>
                            );
                        })}
                       </div>
                <div className="oqilganmain main" id='oqilganmain'><h1>To`lov qilingan</h1></div>
                <div className="oqilmaganmain main" id='oqilmaganmain'><h1>Tolov qilinmagan</h1></div>
            </div>
        </div>
        </>
    )
}

export default QabulAdmin;