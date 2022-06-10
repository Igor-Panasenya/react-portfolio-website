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
                <h5>{langEng ? "Hello I'm" : "Привет! Меня зовут"}</h5>
                <h1>{langEng ? "PANASENYA IGOR" : "Панасеня Игорь"}</h1>
                <h5 className="text-light">{langEng ? "Frontend Developer" : "Фронтэнд разработчик"}</h5>
                <CTA />

                <HeaderSocial />

                <div className="me">
                    <img src='/img/main-photo.png' alt="me"/>
                </div>


                    {/*КНОПКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА*/}

                    <div
                        className={langEng ? 'lang-btn active' : 'lang-btn'}
                        onClick={() => setLangEng(!langEng)}
                    >
                        <span className='lang-btn-circle'></span>

                        <span className='langRu'>ru</span>
                        <span className='langEng'>eng</span>

                    </div>

                <a href="#contact" className='scroll__down'>{langEng ? "Scroll Down" : "Вниз"}<BsArrowRightShort size={20}/></a>
            </div>

        </header>
    );
};

export default Header;