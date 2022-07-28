import {langData} from './lang__data'
// ? Boburbek's code
const newsTitle = document.querySelector('.news_title')
function langChanger(lang) {
    console.log(lang);
    const HeaderLink_1 = document.querySelector('.link_1')
    HeaderLink_1.textContent = langData[lang].header.first
    const HeaderLink_2 = document.querySelector('.link_2')
    HeaderLink_2.textContent = langData[lang].header.second
    const HeaderLink_3 = document.querySelector('.link_3')
    HeaderLink_3.textContent = langData[lang].header.third
    const HeaderLink_4 = document.querySelector('.link_4')
    HeaderLink_4.textContent = langData[lang].header.fourth
    const HeaderLink_5 = document.querySelector('.link_5')
    HeaderLink_5.textContent = langData[lang].header.fivth
    const HeaderLink_6 = document.querySelector('.link_6')
    HeaderLink_6.textContent = langData[lang].header.sixth
    
    const SubHeaderLink_1 = document.querySelector('.sub_header_1')
    SubHeaderLink_1.textContent = langData[lang].sub_header.first
    const SubHeaderLink_2 = document.querySelector('.sub_header_2')
    SubHeaderLink_2.textContent = langData[lang].sub_header.second

    const searchBtn = document.querySelector(".button_search_linl")
    searchBtn.textContent = langData[lang].search.first
    const searchTitle = document.querySelector(".header_rask_studijas_p")
    searchTitle.textContent = langData[lang].search.second

    const newsTitle_1 = document.querySelector('.news_1')
    newsTitle_1.textContent = langData[lang].news.first
    const newsTitle_2 = document.querySelector('.news_2')
    newsTitle_2.textContent = langData[lang].news.second
    const newsTitle_3 = document.querySelector('.news_3')
    newsTitle_3.textContent = langData[lang].news.third
    const newsTitle_4 = document.querySelector('.news_4')
    newsTitle_4.textContent = langData[lang].news.fourth
    const newsTitle_5 = document.querySelector('.news_5')
    newsTitle_5.textContent = langData[lang].news.fivth
    const newsTitle_6 = document.querySelector('.news_6')
    newsTitle_6.textContent = langData[lang].news.sixth
    const newsTitle_7 = document.querySelector('.news_7')
    newsTitle_7.textContent = langData[lang].news.seventh
    
    const publicsTitle_1 = document.querySelector('.publics_1')
    publicsTitle_1.textContent = langData[lang].publics.first
    const publicsTitle_2 = document.querySelector('.publics_2')
    publicsTitle_2.textContent = langData[lang].publics.second
    const publicsTitle_3 = document.querySelector('.publics_3')
    publicsTitle_3.textContent = langData[lang].publics.third
    const publicsTitle_4 = document.querySelector('.publics_4')
    publicsTitle_4.textContent = langData[lang].publics.fourth
    const publicsTitle_5 = document.querySelector('.publics_5')
    publicsTitle_5.textContent = langData[lang].publics.fivth
    const publicsTitle_6 = document.querySelector('.publics_6')
    publicsTitle_6.textContent = langData[lang].publics.sixth
    const publicsTitle_7 = document.querySelector('.publics_7')
    publicsTitle_7.textContent = langData[lang].publics.seventh

    if(lang == 0){
        newsTitle.innerHTML = `<%= article.title_uz %>`
    }else if(lang == 1){
        newsTitle.innerHTML = `<%= article.title_ru %>`
    }else if(lang == 2){
        newsTitle.innerHTML = `<%= article.title_en %>`
    }
}
langChanger()