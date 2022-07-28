import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';

function Announcements() {
    const { lang, setLang } = useContext(LanguageContext);
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/announcements/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data)
            });
    }, [])
    return (
        <>
            <div class="body_Naujienos_wrapper2">
                <div class="page_body_Naujienos2">
                    <h2 class="publics_1">{context[lang].publics.first}</h2>
                </div>
                <div class="page_body_Naujienos_the_loop_wrapper2">
                    <div class="data_elonlar_wrapper ">
                        {announcements.map(item => (
                            <a href={`/announcements/${item.id}`} class="news_item">
                                <div class="card ">
                                    <img class="card-img-top" src={item.img} alt="Card image cap" width="150px"
                                        height="200px" />
                                    <div class="card-body">
                                        <h5 class="card-title elon_title">{item[`title_${lang}`]}</h5>
                                        <p class="card-text the_loop_p2 elon_body" >
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div class="roditi_dougiau_button">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Announcements;
