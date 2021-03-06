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
                                My name is Igor <br/>
                                I have a higher technical education and I . . . Frontend Developer. <br/>
                                <br/> About a year ago, I started to get involved in programming and chose the path of a web developer for myself.
                                I have completed several HTML and CSS courses, and JavaScript course.
                                At the moment, he is able to develop a front-end part of a full-fledged web application using React JS, Redux Toolkit, React Router, React Hooks, etc.
                                My largest online store project can be seen in the Portfolio section.
                                <br/>
                                <br/> I will be glad to cooperate.
                            </p>
                        :    <p>
                                Привет! <br/>
                                Меня зовут Игорь. <br/>
                                У меня высшее техническое образование и я . . . фронтэнд разработчик. <br/>
                                <br/> Около года назад я начал увлекаться программированием и выбрал для себя путь вэб-разработчика.
                                Я закончил несколько курсов по HTML и CSS, а также курс по JavaScript.
                                На данный момент способен разработать фронтэнд часть полноценного вэб-приложения с использованием React JS, Redux Toolkit, React Router, React Hooks и т.п.
                                Мой самый крупный проект интернет-магазина можно увидеть в разделе Портфолио.
                                <br/>
                                <br/> Буду рад сотрудничеству.
                            </p>
                    }


                    <a href="#contact"  className="btn btn-primary">{langEng ? "Let's Talk" : "Связаться со мной"}</a>
                </div>
            </div>
        </section>
    );
};

export default About;