import React, {useContext, useEffect, useRef} from 'react';
import { useState } from 'react';
import './card.scss';
import {LangContext} from "../../App";

const Card = ({image, github, demo, description}) => {

    const {langEng} = useContext(LangContext);
    const [isClickMore, setIsClickMore] = useState(false);

    //  ЗАКРЫТИЕ MORE ПРИ КЛИКЕ ВНЕ ОБЛАСТИ РАБОТЫ
    const sortRef = useRef()
    const outSideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setIsClickMore(false);
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', outSideClick)
    }, [])

    return (
        <div ref={sortRef} className={isClickMore ? "card active" : "card"}>
            <div className="card__image-box">
                <div className="lines"></div>
                <div className="card__image">
                    <div className="card__image-background" style={{backgroundImage: `url(${image})`}}></div>
                </div>
            </div>
            <div className="card__description">

                <div className="description-content">

                    <h3>{langEng ? 'Implemented:' : 'Реализовано'}</h3>

                        <ul className="description-list">

                            {description.eng.map((descriptionItem, index) =>
                                <li key={index} className="description-item">
                                    <article className="description-item__title">{descriptionItem.title}</article> -
                                    <span className="description-item__body">{descriptionItem.body}</span>
                                </li>
                            )}
                        </ul>


                    <div className="portfolio__item-cta">
                        <a href={github} className="btn" target='_blank'>Github</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>{langEng ? 'Live Demo' : 'Просмотр'}</a>
                    </div>
                </div>

                <button onClick={() => setIsClickMore(!isClickMore)} className="btn-click"></button>
            </div>
        </div>
    
    );
};

export default Card;