import React from 'react';
import CV from '../../CV.pdf';
import {useContext} from "react";
import {LangContext} from "../../App";

const Cta = () => {

    const { langEng, setLangEng } = useContext(LangContext)

    return (
        <div className="cta" data-aos="fade-up" data-aos-delay="300">
            {/*<a href={CV} download className='btn'>{langEng ? "Download CV" : "Скачать резюме"}</a>*/}
            <a href="#contact" className='btn btn-primary' >{langEng ? "Let's Talk" : "Связаться со мной"}</a>
        </div>
    );
};

export default Cta;