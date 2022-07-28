import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import News from '../../components/news_list/news_list'
import {FaYoutube} from 'react-icons/fa'
import { useState, useEffect, useContext, useRef } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import '../ariza_page/ariza.css'
import ParticlesBg from 'particles-bg';
import Qushmatalimmainphoto from '../homePage/double-degree-uzb.png'
import Announcements from '../../components/announcements/announcements'


function HomePage() {
  const { lang } = useContext(LanguageContext);
  return (
    <div className='wrapped'>
            <ParticlesBg color="#0d3b66" type="cobweb" num={150} bg={true} />
      <Header />
      <div className="qushmatalim-photo">
        <img src={Qushmatalimmainphoto} alt="" />
      </div>
      <News />
      <Announcements />
      <div className="arizatopbos">
        <div className="arizatopbos-header" id='arizatopbos-header'>
          <h3>{context[lang].yoriqnomaHeader.first}</h3>
        </div>
        <div className="arizatopbos-qismlar">
        <div className="arizatopbos-bir">
          <div className="num">
            <h1>1</h1>
          </div>
          <h1>{context[lang].yoriqnomaMainHeader.first}</h1>
          <p>Ariza formasini to'ldiring va kerakli hujjatlarni tizimga yuklang</p>
        </div>
        <div className="arizatopbos-ikki">
        <div className="num">
            <h1>2</h1>
          </div>
          <h1>{context[lang].yoriqnomaMainHeader.second}</h1>
          <p>{context[lang].yoriqnomaMainBody.second}</p>
        </div>
        <div className="arizatopbos-uch">
        <div className="num">
            <h1>3</h1>
          </div>
          <h1>{context[lang].yoriqnomaMainHeader.third}</h1>
          <p>{context[lang].yoriqnomaMainBody.third}</p>
        </div>
        <div className="arizatopbos-tort">
        <div className="num">
            <h1>4</h1>
          </div>
          <h1>{context[lang].yoriqnomaMainHeader.fourth}</h1>
          <p>{context[lang].yoriqnomaMainBody.fourth}</p>
        </div>
        </div>
        <div className="yoriqnoma">
          <a href="" id='yoriqnoma-link'><FaYoutube id='icon' />{context[lang].yoriqnomaMainBody.fifth} </a>
        </div>
      </div>
      <div className="statistika" id='statistika'>
        <div className="statistika-header">
          <h1>{context[lang].yoriqnomaMainBody.sixth}</h1>
        </div>
        <div className="statistika-main" id='footer'>
          <select name="" id="" placeholder='Talim turi'>
            <option value="" selected disabled>{context[lang].yoriqnomaMainBody.seventh}</option>
            <option value="">{context[lang].yoriqnomaMainBody.eighth}</option>
            <option value="">{context[lang].yoriqnomaMainBody.nineth}</option>
            <option value="">{context[lang].yoriqnomaMainBody.tenth}</option>
          </select>
          <select name="" id="" disabled></select>
          <select name="" id="" disabled></select>
        </div>
        <h3>{context[lang].yoriqnomaMainBody.eleventh}</h3>
        <table border="1">
            <thead>
              <th>{context[lang].yoriqnomaMainBody.twelveth}</th>
              <th>{context[lang].yoriqnomaMainBody.thirteenth}</th>
              <th>{context[lang].yoriqnomaMainBody.fourteenth}</th>
            </thead>
            <tbody>
              <tr>
                <td>{context[lang].yoriqnomaMainBody.fifteeenth}</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;