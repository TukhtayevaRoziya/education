import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import '../user-page/userpage.css'
import UserPhoto from './topshiruvchiig/3.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function UserPage() {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get(`https://univer1216.herokuapp.com/user/${id}`).then((res) => {
            console.log(res);
            setData(res.data);
        });
    }, [id]);
    return (
      <div className="container-user">
        <Header />
        <div className="about-user">
          <img src={data?.kocha} alt="" />
          <h1 className="user__title">
            {data?.Ismi + " " + data?.familiya + " " + data?.otasiniIsmi}
          </h1>
          <h3>Manzili</h3>
          <p className='user__adress'>{data?.yashashManzili+" viloyati "+data?.tumanlar+" tumani "+data?.Mahalla+ ','+ data?.uyRaqami+"-xonadon"}</p>
        </div>
        <div className="imtihon-vaqti">
          <h1>Imtihon vaqti</h1>
        </div>
        <div className="suhbat">
          <form action="">
          <label htmlFor="file">To`lov kvitansiyasini jo`nating</label>
          <input type="file" name="" id="file" />
          <button type='submit'>Jo`natish</button>
          </form>
        </div>
        <Footer />
      </div>
    );
}

export default UserPage;