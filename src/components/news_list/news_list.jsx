import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import PhotoNews1 from '../news_list/1.jpeg'
import PhotoNews2 from '../news_list/2.jpeg'
import PhotoNews3 from '../news_list/3.jpeg'
import PhotoNews4 from '../news_list/4.jpeg'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function News() {
    const { lang, setLang } = useContext(LanguageContext);
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    return (
        <>
            <div class="body_Naujienos_wrapper">
                <div class="page_body_Naujienos">
                    <h2 class="news_1">{context[lang].news.first}</h2>
                </div>
                <div class="page_body_Naujienos_the_loop_wrapper paddingNews list-wrapper">
                    
                        <a>
                            <div class="the_loop_img list-item">
                                <img src={PhotoNews3} class="newsImage" width="250px" height="250px" alt="" />
                                <h5 class="the_loop_text textOverflow news_title">{context[lang].newss.first}</h5>
                                <p class="the_loop_p news_date">13.04.2022</p>
                            </div>
                        </a>
                        <a>
                            <div class="the_loop_img list-item">
                                <img src={PhotoNews2} class="newsImage" width="250px" height="250px" alt="" />
                                <h5 class="the_loop_text textOverflow news_title">{context[lang].newss.second}</h5>
                                <p class="the_loop_p news_date">13.04.2022</p>
                            </div>
                        </a>
                        <a>
                            <div class="the_loop_img list-item">
                                <img src={PhotoNews1} class="newsImage" width="250px" height="250px" alt="" />
                                <h5 class="the_loop_text textOverflow news_title">{context[lang].newss.third}</h5>
                                <p class="the_loop_p news_date">13.04.2022</p>
                            </div>
                        </a>
                        <a>
                            <div class="the_loop_img list-item">
                                <img src={PhotoNews4} class="newsImage" width="250px" height="250px" alt="" />
                                <h5 class="the_loop_text textOverflow news_title">{context[lang].newss.fourth}</h5>
                                <p class="the_loop_p news_date">15.04.2022</p>
                            </div>
                        </a>
                        
                </div>
                <div id="pagination-container" class="light-theme simple-pagination"></div>
            </div>
        </>
    );
}

export default News;
