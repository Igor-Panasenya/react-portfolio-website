import React from 'react';
import './portfolio.css';
import {useContext} from "react";
import {LangContext} from "../../App";

const portfolioArray = [
    // {
    //     id: 7,
    //     image: '/img/portfolio7.jpg',
    //     github: 'https://github.com/Igor-Panasenya/GoTrip',
    //     demo: 'https://portfolio-go-trip.netlify.app/'
    // },
    {
        id: 6,
        image: '/img/portfolio6.jpg',
        github: 'https://github.com/Igor-Panasenya/TopBoost',
        demo: 'https://portfolio-top-boost.vercel.app/'
    },
    {
        id: 5,
        image: '/img/portfolio5.jpg',
        github: 'https://github.com/Igor-Panasenya/logoipsum',
        demo: 'https://portfolio-logo-ipsum.netlify.app/'
    },
    {
        id: 4,
        image: '/img/portfolio4.jpg',
        github: 'https://github.com/Igor-Panasenya/cityman-store.git',
        demo: 'https://cityman-store.vercel.app/'
    },
    {
        id: 3,
        image: '/img/portfolio1.jpg',
        github: 'https://github.com/Igor-Panasenya/portfolio-agency.git',
        demo: 'https://portfolio-agency.netlify.app/'
    },
    {
        id: 2,
        image: '/img/portfolio2.jpg',
        github: 'https://github.com/Igor-Panasenya/portfolio-revo.git',
        demo: 'https://portfolio-revo.netlify.app/'
    },
    {
        id: 1,
        image: '/img/portfolio3.jpg',
        github: 'https://github.com/Igor-Panasenya/portfolio-creatives.git',
        demo: 'https://portfolio-creatives.netlify.app/'
    },
]

const Portfolio = () => {

    const {langEng} = useContext(LangContext)

    return (
        <section id='portfolio'>
            {langEng && <h5>My Resent Work</h5>}
            <h2>{langEng ? 'Portfolio' : 'Портфолио'}</h2>

            <div className="container portfolio__container">
                {portfolioArray.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image" style={{backgroundImage: `url(${image})`}}>
                                    {/*<img src={image} alt="portfolio" />*/}
                                </div>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='_blank'>Github</a>
                                    <a href={demo} className="btn btn-primary" target='_blank'>{langEng ? 'Live Demo' : 'Просмотр'}</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    );
};

export default Portfolio;