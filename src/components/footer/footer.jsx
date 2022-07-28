import { Helmet } from "react-helmet";
// import { useEffect } from 'react'
// import TelegramIcon from '../../images/social-icons/telegram-brands.svg'
// import InstagramIcon from '../../images/social-icons/instagram-brands.svg'
// import FacebookIcon from '../../images/social-icons/facebook-brands.svg'
// import YoutubeIcon from '../../images/social-icons/youtube-brands.svg'


function Footer() {
    return (
        <>
            <div className="container-fluid">
                <footer class="footer d-flex align-items-center" id="footer">
                    {/* <div class="gerb">
                        <img class="mt--3" src={Gerb} alt="" width="100" height="100" />
                    </div> */}
                    <div class="location">
                        <h4><i class="fa-solid fa-location-dot"></i>Manzil: Toshkent sh. Navoiy ko’chasi, 32 uy, 100011</h4>
                        <p><i class="fa-solid fa-mobile-screen-button"></i>Telefon: (998-71)244-79-15.: (998-71)244-79-18.:</p>
                        <p>(998-71)244-79-20.: Faks: (998-71)244-79-17</p>
                        <p><i class="fa-solid fa-envelope"></i>E-mail: info@tcti.uz, @tktimatbuotxizmati</p>
                    </div>
                    {/* <div className="social">
                        <ul className="social-list">
                            <li className="social-items social_telegram">
                                <img src={TelegramIcon} />
                            </li>
                            <li className="social-items social_instagram">
                                <img src={InstagramIcon} />
                            </li>
                            <li className="social-items social_facebook">
                                <img src={FacebookIcon} />
                            </li>
                            <li className="social-items social_youtube">
                                <img src={YoutubeIcon} />
                            </li>
                        </ul>
                    </div> */}
                    <Helmet>
                        <script src="../../js/lang_data.js" type="text/javascript" />
                    </Helmet>
                </footer>
            </div>
        </>
    );
}

export default Footer;
