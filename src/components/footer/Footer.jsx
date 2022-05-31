import React from 'react';
import './footer.css';
import {AiOutlineInstagram} from 'react-icons/ai';
import {TiSocialLinkedin} from 'react-icons/ti';
import {useContext} from "react";
import {LangContext} from "../../App";

const Footer = () => {

    const {langEng} = useContext(LangContext)

    return (
        <footer>
            <a href="#" className="footer__logo"> {langEng ? "PANASENYA IGOR" : "ПАНАСЕНЯ ИГОРЬ"}</a>

            <ul className="permalinks">
                <li><a href="#"> {langEng ? "Home" : "Главная"}</a></li>
                <li><a href="#about"> {langEng ? "About" : "Обо мне"}</a></li>
                <li><a href="#experience"> {langEng ? "Experience" : "Мои навыки"}</a></li>
                <li><a href="#portfolio"> {langEng ? "Portfolio" : "Портфолио"}</a></li>
                <li><a href="#contact"> {langEng ? "Contact" : "Контакты"}</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.instagram.com/vivern_eht/" target='_blanck'><AiOutlineInstagram/></a>
                <a href="https://www.linkedin.com/in/%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D0%BF%D0%B0%D0%BD%D0%B0%D1%81%D0%B5%D0%BD%D1%8F-96a875229/" target='_blanck'><TiSocialLinkedin/></a>
            </div>

        </footer>
    );
};

export default Footer;