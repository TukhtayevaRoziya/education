import './header.css';
import Logo from '../../images/logo.png'
import uzFlag from '../../images/uz.png'
import ruFlag from '../../images/ru.png'
import enFlag from '../../images/eng.png'
import { useState, useEffect, useContext, useRef } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import {Link} from 'react-router-dom'
import iconMenu from '../header/icon.jpeg'
import IconClose from '../header/images.png'

function Header() {
    const innerMenu = useRef()
    const header = useRef()
    const { lang, setLang } = useContext(LanguageContext);
    const [allSc, setAllSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/all_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAllSc(data)
            });
    }, [])
    const [consistsSc, setConsistsSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/consists_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setConsistsSc(data)
            });
    }, [])
    const [subStudentSc, setSubStudentSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/sub_student_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSubStudentSc(data)
            });
    }, [])
    const [studentSc, setStudentSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/student_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setStudentSc(data)
            });
    }, [])
    const [workingSc, setWorkingSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/working_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setWorkingSc(data)
            });
    }, [])
    const [contactsSc, setContactsSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/contacts_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setContactsSc(data)
            });
    }, [])
    const [interactiveSc, setInteractiveSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/interactive_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setInteractiveSc(data)
            });
    }, [])
    const [corruptionSc, setCorruptionSc] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/corruption_sc')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCorruptionSc(data)
            });
    }, [])
    const [allList, setAllList] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAllList(data)
            });
    }, [])
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const burgerIcon = useRef()

    
    return (
        <div class="wrapperheader" ref={header}>
            <div class="containerheader container-fluid">
                <div class="page_header_wrapper">

                    <div class="header_Logo">
                        <a href="/">
                            <img src={`${Logo}`} alt="" />
                        </a>
                        <div className="logo_name">
                            <a href="/">
                                <h5>{context[lang].logo.first} <br />{context[lang].logo.second} <br />{context[lang].logo.third}</h5>
                            </a>
                        </div>
                    </div>
                    <p class="burger_wrapper" onClick={(e) => {
                        e.preventDefault()
                        innerMenu.current.classList.toggle('opened')
                        header.current.classList.toggle('fixed_block')
                        if (burgerIcon.current.src === "http://localhost:3000/static/media/burger_icon.ab3ea912d85a390aeef9090cd37608e7.svg") {
                            console.log(IconClose);
                            burgerIcon.current.setAttribute('src', IconClose)
                            // burgerIcon.current.setAttribute('width', "50")
                        } else {
                            burgerIcon.current.setAttribute('src', iconMenu)
                            // burgerIcon.current.setAttribute('width', "50")
                        }
                    }}>
                        <img ref={burgerIcon} src={iconMenu} alt="menu" width={50} />
                    </p>
                    <div class="header_nav">
                        <ul>
                            <li class="header_nav_li dropdown nav-item-qushmatalim">
                            <Link to="/ariza">
                                    <p className='btn font-weight-bold   dropdown-toggle' id="dropdownMenuLink">
                                    {context[lang].header.first}
                                    </p>
                                </Link>
                            </li>
                            <li class="header_nav_li dropdown nav-item-qushmatalim">
                                <a class="btn font-weight-bold   dropdown-toggle" href="#footer" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    {context[lang].header.fivth}
                                </a>
                            </li>
                            <li class="header_nav_li dropdown nav-item-qushmatalim">
                                    <Link class="btn font-weight-bold   dropdown-toggle" id='dropdownMenuLink' to="#footer" spy={true} smooth={true} offset={50} duration={500}>{context[lang].header.third}</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="header_nav_news">
                        <ul class="sub_menu__wrapper">
                            <li class="header_nav_li dropdown">
                                <a href="tel:+998712447849" class="header_nav_link font-weight-normal font-weight-normal dropbtn nav_news_link">
                                    <span class="sub_header_2"> (+99871)244-78-49</span>
                                </a>
                            </li>
                            <li class="header_nav_li none_hover dropdown">
                                <div class="commands">
                                    <div class="gerb">
                                        <img class="mt--3" src="https://logobank.uz:8005/media/logos_png/%D0%B3%D0%B5%D1%80%D0%B1_%D0%A3%D0%B7%D0%B1_%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-01.png" alt="" width="25" />
                                    </div>
                                    <button class="zoom_btn zoom_minus" onClick={(e) => {
                                        e.preventDefault()
                                        var Page = document.body;
                                        var zoom = parseInt(Page.style.zoom) - 10 + '%'
                                        Page.style.zoom = zoom;
                                        return false;
                                    }}>A-</button>
                                    <button class="zoom_btn zoom_default" onClick={(e) => {
                                        e.preventDefault()
                                        var Page = document.body;
                                        var zoom = '100%'
                                        Page.style.zoom = zoom;
                                        return false;
                                    }}>A</button>
                                    <button class="zoom_btn zoom_plus" onClick={(e) => {
                                        e.preventDefault()
                                        var Page = document.body;
                                        var zoom = parseInt(Page.style.zoom) + 10 + '%'
                                        Page.style.zoom = zoom;
                                        return false;
                                    }}>A+</button>
                                    <button class="zoom_btn theme_btn" onClick={(e) => {
                                        e.preventDefault()
                                        var Page = document.body;
                                        Page.classList.toggle('greyscale')
                                    }}><img
                                            src="https://cdn-icons-png.flaticon.com/512/61/61410.png" alt="" width="17" /></button>
                                </div>
                            </li>
                            <li class="header_nav_li lang__selector ml-5">
                                <button class="translator" onClick={(e) => {
                                    e.preventDefault()
                                    setLang('uz')
                                }}>
                                    <img src={`${uzFlag}`} alt="translator" width="20px" /></button>
                                <button class="translator" onClick={(e) => {
                                    e.preventDefault()
                                    setLang('ru')
                                }}><img src={`${ruFlag}`} alt="translator"
                                    width="20px" /></button>
                                <button class="translator" onClick={(e) => {
                                    e.preventDefault()
                                    setLang('en')
                                }}><img src={`${enFlag}`} alt="translator"
                                    width="20px" /></button>
                            </li>
                        </ul>
                    </div>
                    <div ref={innerMenu} className="inner_menu">
                        <ul className="catalog-list">
                            <li>
                                <h4 className='main_text'>{context[lang].header.first}</h4>
                                <ul>
                                    {allSc.map(item => (
                                        <li key={item.id}>
                                            <a href={`/page/get/${item.id}`} class="all_sc">{item[`section_name_${lang}`]}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                            <Link to="/ariza">
                                <h4 className='main_text'>{context[lang].header.third}</h4>
                            </Link>
                            </li>
                            <li>
                                <h4 className='main_text'>{context[lang].header.fivth}</h4>
                                <ul>
                                    {workingSc.map(item => (
                                        <li key={item.id}>
                                            <a href={`/page/get/${item.id}`} class="all_sc">{item[`section_name_${lang}`]}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
