import React, {useContext} from 'react';
import './about.css';
import {LangContext} from "../../App";

const About = () => {

    const {langEng} = useContext(LangContext)

    return (
        <section id='about'>
            {langEng && <h5>Get To Know</h5>}
            <h2>{langEng ? "About Me" : "Обо мне"}</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src='/img/me-about.jpg' alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    {
                        langEng
                        ? <p>
                                Hello! <br/>
                                I have a higher technical education and I . . . Frontend Developer. <br/>
                                <br/> I specialize in frontend development using HTML, CSS and JavaScript, and I also develop web applications using React.JS with Redux Toolkit technology.
                                <br/><br/> By contacting me, you get an attractive website for clients that has smooth animations, intriguing functionality and is fully responsive to the mobile version.
                                <br/><br/> Glad to cooperate.
                            </p>
                        :    <p>
                                Привет! <br/>
                                У меня высшее техническое образование и я . . . фронтэнд разработчик. <br/>
                                <br/> Я специализируюсь на разработке фронтенд части сайтов на HTML, CSS и JavaScript, а также разрабатываю веб-приложения на React.JS с применением технологии Redux Toolkit.
                                <br/><br/> Обращаясь ко мне, ты получаешь привлекательный для клиентов сайт, который имеет плавные анимации, интрересный функционал и полностью адаптивный к мобильной версии.
                                <br/><br/> Буду рад сотрудничеству.
                            </p>
                    }


                    <a href="#contact"  className="btn btn-primary">{langEng ? "Let's Talk" : "Связаться со мной"}</a>
                </div>
            </div>
        </section>
    );
};

export default About;