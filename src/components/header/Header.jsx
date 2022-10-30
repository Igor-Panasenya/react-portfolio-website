import React, {useContext, useState} from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from "./HeaderSocial";
import {BsArrowRightShort} from "react-icons/bs";
import 'animate.css';
import {LangContext} from "../../App";

const Header = () => {

    const { langEng, setLangEng } = useContext(LangContext);

    return (
        <header>
            <div className="container header__container">
                <h5 data-aos="fade-up">{langEng ? "Hello I'm" : "Привет! Меня зовут"}</h5>
                <h1 data-aos="fade-up" data-aos-delay="100">{langEng ? "PANASENYA IGOR" : "Панасеня Игорь"}</h1>
                <h5 className="text-light" data-aos="fade-up" data-aos-delay="200">{langEng ? "Frontend Developer" : "Фронтэнд разработчик"}</h5>
                <CTA />

                <HeaderSocial />

                <div className="me" data-aos="fade-up" data-aos-delay="400">
                    <img src='/img/main-photo.png' alt="me"/>
                </div>

                    {/*КНОПКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА*/}
                <div data-aos="fade-up">
                    <button
                        className={langEng ? 'lang-btn active' : 'lang-btn'}
                        onClick={() => setLangEng(!langEng)}
                    >
                        <span className='lang-btn-circle'></span>

                        <span className='langRu'>ru</span>
                        <span className='langEng'>eng</span>

                    </button>
                </div>


                <a href="#contact" className='scroll__down'>{langEng ? "Scroll Down" : "Вниз"}<BsArrowRightShort size={20}/></a>
            </div>

        </header>
    );
};

export default Header;