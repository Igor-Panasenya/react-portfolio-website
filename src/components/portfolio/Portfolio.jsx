import React from 'react';
import './portfolio.scss';
import {useContext} from "react";
import {LangContext} from "../../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PortfolioItem from "../portfolioItem/PortfolioItem";

const portfolioArray = [
    {
        id: 8,
        image: '/img/portfolio8.jpg',
        github: 'https://github.com/Igor-Panasenya/mr.snark',
        demo: 'https://portfolio-mr-snark.netlify.app/'
    },
    {
        id: 7,
        image: '/img/portfolio7.jpg',
        github: 'https://github.com/Igor-Panasenya/go-trip',
        demo: 'https://portfolio-go-trip.vercel.app/'
    },
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

            <div className="container">

                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    modules={[Navigation]}
                    loop={true}
                    className="mySwiper"
                >

                    {portfolioArray.map(({id, image, title, github, demo}) => {
                        return (

                            <SwiperSlide key={id}>

                                <PortfolioItem
                                    image={image}
                                    github={github}
                                    demo={demo}
                                    data-aos="fade-up"
                                />

                            </SwiperSlide>

                        )
                    })
                    }

                </Swiper>

            </div>
        </section>
    );
};

export default Portfolio;