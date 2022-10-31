import React, {useEffect, useRef, useState} from 'react';
import './porrtfolioItem.scss';
import {useContext} from "react";
import {LangContext} from "../../App";

const PortfolioItem = ({image, github, demo}) => {

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
        <div ref={sortRef} className="card-box" onClick={() => setIsClickMore(!isClickMore)}>
            <div className={isClickMore ? "card active" : "card"}>
                <div className="lines"></div>

                <div className="portfolio__item">
                    <div className="portfolio__item-image" style={{backgroundImage: `url(${image})`}}></div>
                    <div className="portfolio__item-cta">
                        <a href={github} className="btn" target='_blank'>Github</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>{langEng ? 'Live Demo' : 'Просмотр'}</a>
                    </div>
                    <button onClick={() => setIsClickMore(!isClickMore)} className="portfolio__item-more"></button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;