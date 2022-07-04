import React from 'react';
import './experience.css';
import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {DiSass} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import {FaFigma} from 'react-icons/fa';
import {SiAdobephotoshop} from 'react-icons/si';
import {useContext} from "react";
import {LangContext} from "../../App";

const Experience = () => {

    const {langEng} = useContext(LangContext)

    return (
        <section id='experience'>

            {langEng && <h5>What Skills I Have</h5>}
            <h2>{langEng ? "My Experience" : "Мои навыки"}</h2>

            <div className="container">
                <div className="experience__content">
                    <h3> {langEng ? "Frontend Development" : "Для Фронтэнд разработки"}</h3>
                    <div className="experience__items">

                        <article className="experience__item">
                            <AiFillHtml5 className="experience__item-icon" />
                            <h4>HTML</h4>
                        </article>

                        <article className="experience__item">
                            <FaCss3Alt className="experience__item-icon" />
                            <h4>CSS</h4>
                        </article>

                        <article className="experience__item">
                            <DiSass className="experience__item-icon" />
                            <h4>Sass</h4>
                        </article>

                        <article className="experience__item">
                            <SiJavascript className="experience__item-icon" />
                            <h4>JavaScript</h4>
                        </article>

                        <article className="experience__item">
                            <FaReact className="experience__item-icon" />
                            <h4>React.js</h4>
                        </article>

                        <article className="experience__item">
                            <SiRedux className="experience__item-icon" />
                            <h4>Redux Toolkit</h4>
                        </article>

                        <article className="experience__item">
                            <BsGithub className="experience__item-icon" />
                            <h4>GitHub</h4>
                        </article>

                        <article className="experience__item">
                            <FaFigma className="experience__item-icon" />
                            <h4>Figma</h4>
                        </article>

                        <article className="experience__item">
                            <SiAdobephotoshop className="experience__item-icon" />
                            <h4>Photoshop</h4>
                        </article>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Experience;