import React from 'react';
import './portfolio.scss';
import {useContext} from "react";
import {LangContext} from "../../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Card from "../card/Card";

const portfolioArray = [
    {
        id: 10,
        image: '/img/portfolio10.jpg',
        github: 'https://github.com/Igor-Panasenya/elecar/',
        demo: 'https://portfolio-elecar.vercel.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 9,
        image: '/img/portfolio9.jpg',
        github: 'https://github.com/Igor-Panasenya/beats-3/',
        demo: 'https://portfolio-beats-3.netlify.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 8,
        image: '/img/portfolio8.jpg',
        github: 'https://github.com/Igor-Panasenya/mr.snark',
        demo: 'https://portfolio-mr-snark.netlify.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 7,
        image: '/img/portfolio7.jpg',
        github: 'https://github.com/Igor-Panasenya/go-trip',
        demo: 'https://portfolio-go-trip.vercel.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 6,
        image: '/img/portfolio6.jpg',
        github: 'https://github.com/Igor-Panasenya/TopBoost',
        demo: 'https://portfolio-top-boost.vercel.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 5,
        image: '/img/portfolio5.jpg',
        github: 'https://github.com/Igor-Panasenya/logoipsum',
        demo: 'https://portfolio-logo-ipsum.netlify.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 4,
        image: '/img/portfolio4.jpg',
        github: 'https://github.com/Igor-Panasenya/cityman-store.git',
        demo: 'https://cityman-store.vercel.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 3,
        image: '/img/portfolio1.jpg',
        github: 'https://github.com/Igor-Panasenya/portfolio-agency.git',
        demo: 'https://portfolio-agency.netlify.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 2,
        image: '/img/portfolio2.jpg',
        github: 'https://github.com/Igor-Panasenya/portfolio-revo.git',
        demo: 'https://portfolio-revo.netlify.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 1,
        image: '/img/portfolio3.jpg',
        github: 'https://github.com/Igor-Panasenya/portfolio-creatives.git',
        demo: 'https://portfolio-creatives.netlify.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'HTML'
                },
                {
                    title: 'UI',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS, JSX'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
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

                    {portfolioArray.map(({id, image, github, demo, description}) => {
                        return (

                            <SwiperSlide key={id}>

                                <Card
                                    image={image}
                                    github={github}
                                    demo={demo}
                                    description={description}
                                    data-aos="fade-up"
                                />

                                {/*<PortfolioItem*/}
                                {/*    image={image}*/}
                                {/*    github={github}*/}
                                {/*    demo={demo}*/}
                                {/*    description={description}*/}
                                {/*    data-aos="fade-up"*/}
                                {/*/>*/}

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