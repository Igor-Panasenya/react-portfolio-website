import React from 'react';
import CV from '../../CV.pdf';

const Cta = () => {

    return (
        <div className="cta">
            <a href={CV} download className='btn'>{/*"Download CV"*/}Скачать резюме</a>
            <a href="#contact" className='btn btn-primary'>{/*"Let's Talk"*/}Связаться со мной</a>
        </div>
    );
};

export default Cta;