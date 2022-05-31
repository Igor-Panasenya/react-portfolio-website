import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {SiViber} from 'react-icons/si';
import {FaTelegramPlane} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import 'animate.css';

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a className="animate__animated animate__fadeInLeftBig" href="viber://chat?number=%2B375292685770" target="_blank"><SiViber/></a>
            <a className="animate__animated animate__fadeInLeftBig" href="https://t.me/sokolov52" target="_blank"><FaTelegramPlane/></a>
            <a className="animate__animated animate__fadeInLeftBig" href="https://www.linkedin.com/in/%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D0%BF%D0%B0%D0%BD%D0%B0%D1%81%D0%B5%D0%BD%D1%8F-96a875229/"
               target="_blank"><BsLinkedin/></a>
            <a className="animate__animated animate__fadeInLeftBig" href="https://www.instagram.com/vivern_eht/" target="_blank"><FiInstagram/></a>

        </div>
    );
};

export default HeaderSocial;