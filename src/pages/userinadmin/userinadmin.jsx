import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import '../userinadmin/userinadmin.css'
import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

function UserPageForAdmin() {
    const [user, setUser] = useState({});
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`https://univer1216.herokuapp.com/user/${id}`).then(res => {
            console.log(res.data);
            setUser(res.data);
        });
    }, [])
    return (
            <div className='container-user-admin'>
                <Link to="/qabul">
                <div className='orqaga_useradmin'><FaArrowLeft /> Orqaga</div>
                </Link>
                <div className="useradmin-header">
                <h1>Abituriyent haqida umumiy malumot</h1>
                </div>
                <div className="useradmin-main">
                    <img src={user?.kocha} alt="" width="250px" height="300px" />
            <h1>{ user?.Ismi +' '+ user?.familiya + ' ' + user?.otasiniIsmi}</h1>
            <h3><span>Tug`ligan sanasi:</span> {user?.tugilganSanasi}</h3>
            <h3><span>JSHSHIR Raqami:</span> {user?.JshirRaqami}</h3>
            <h3><span>Manzili: </span>{user?.yashashManzili + ' viloyati, ' + user?.tumanlar + ' tumani, ' + user?.Mahalla + ' mahallasi, ' + user?.uyRaqami + ' - uy'}</h3>
            <h3><span>Topshirgan yo`nalishi: </span>{user?.MutahasislikNomi}</h3>
            <h3><span>Jinsi: </span>{user?.jinsi}</h3>
            <h3><span>Passport seriyasi: </span>{user?.pasport_seriya}</h3>
            <h3><span>Talim darajasi: </span>{user?.talimDarajasi}</h3>
            <h3><span>Talim tili: </span>{user?.talimTili}</h3>
            <h3><span>Talim shakli: </span>{user?.talimShakli}</h3>
            <h3><span>Telefon raqami: </span>{user?.tel}</h3>
            <h3><span>Tugallagan talim muassasasi: </span>{user?.tugallanganTalimMuossasasi}</h3>
            </div>
            <div className='imtihon'>
                          <form action="">
                            <label htmlFor="">Imtihon vaqtini elon qilish</label>
                            <input type="file" name="" id="file" />
                            <button type='submit'>Jo`natish</button>
                          </form>
                        </div>
            </div>
    )
}

export default UserPageForAdmin;