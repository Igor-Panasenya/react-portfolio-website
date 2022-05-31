import React from 'react';
import './portfolio.css';
import IMG1 from '../../img/portfolio1.jpg';
import IMG2 from '../../img/portfolio2.jpg';
import IMG3 from '../../img/portfolio3.jpg';

const portfolioArray = [
    {
        id: 1,
        image: IMG1,
        github: 'https://github.com/Igor-Panasenya/portfolio-agency.git',
        demo: 'https://portfolio-agency.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        github: 'https://github.com/Igor-Panasenya/portfolio-revo.git',
        demo: 'https://portfolio-revo.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        github: 'https://github.com/Igor-Panasenya/portfolio-creatives.git',
        demo: 'https://portfolio-creatives.netlify.app/'
    },
]

const Portfolio = () => {

    return (
        <section id='portfolio'>
            {/*<h5>My Resent Work</h5>*/}
            <h2>{/*'Portfolio'*/}Портфолио</h2>

            <div className="container portfolio__container">
                {portfolioArray.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image" style={{backgroundImage: `url(${image})`}}>
                                    {/*<img src={image} alt="portfolio" />*/}
                                </div>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='_blank'>Github</a>
                                    <a href={demo} className="btn btn-primary" target='_blank'>{/*'Live Demo'*/}Просмотр</a>
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