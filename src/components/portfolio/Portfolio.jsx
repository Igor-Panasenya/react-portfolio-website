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
        id: 11,
        image: '/img/portfolio11.jpg',
        github: 'https://github.com/Igor-Panasenya/social-media-share-me',
        demo: 'https://share-me-portfolio.netlify.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Backend',
                    body: 'Sanity'
                },
                {
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Animation',
                    body: 'React Spring'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
                },
                {
                    title: 'Бэкенд',
                    body: 'Sanity'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Анимация',
                    body: 'React Spring'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
            ]
        }
    },
    {
        id: 10,
        image: '/img/portfolio10.jpg',
        github: 'https://github.com/Igor-Panasenya/elecar/',
        demo: 'https://portfolio-elecar.vercel.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
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
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
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
        demo: 'https://beats-3.vercel.app/',
        description: {
            eng: [
                {
                    title: 'Markup',
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Styles',
                    body: 'SASS preprocessor'
                },
                {
                    title: 'Animation',
                    body: 'AOS Library, animation CSS'
                },
                {
                    title: 'Cart',
                    body: 'Redux Toolkit, react-redux'
                },
                {
                    title: 'Form',
                    body: 'React Hook Form'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
                },
                {
                    title: 'Стилизация',
                    body: 'SASS preprocessor'
                },
                {
                    title: 'Анимация',
                    body: 'AOS Library, animation CSS'
                },
                {
                    title: 'Корзина',
                    body: 'Redux Toolkit, react-redux'
                },
                {
                    title: 'Форма',
                    body: 'React Hook Form'
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
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Styles',
                    body: 'SASS preprocessor'
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
                    title: 'Form',
                    body: 'React Hook Form'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
                },
                {
                    title: 'Стилизация',
                    body: 'Препроцессор SASS'
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
                    title: 'Форма',
                    body: 'React Hook Form'
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
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Styles',
                    body: 'SASS preprocessor'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
                },
                {
                    title: 'Стилизация',
                    body: 'Препроцессор SASS'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
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
                    title: 'Styles',
                    body: 'SASS preprocessor'
                },
                {
                    title: 'Features',
                    body: 'JavaScript'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Стилизация',
                    body: 'Препроцессор SASS'
                },
                {
                    title: 'Функционал',
                    body: 'JavaScript'
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
                    title: 'Styles',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'HTML'
                },
                {
                    title: 'Стилизация',
                    body: 'Tailwind CSS'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
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
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Styles',
                    body: 'SASS preprocessor'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
                {
                    title: 'Routing',
                    body: 'React Router v6'
                },
                {
                    title: 'Cart',
                    body: 'Redux Toolkit, react-redux'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
                },
                {
                    title: 'Стилизация',
                    body: 'Препроцессор SASS'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
                },
                {
                    title: 'Роутинг',
                    body: 'React Router v6'
                },
                {
                    title: 'Корзина',
                    body: 'Redux Toolkit, react-redux'
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
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Styles',
                    body: 'CSS'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS,'
                },
                {
                    title: 'Стилизация',
                    body: 'CSS'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
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
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Styles',
                    body: 'CSS'
                },
                {
                    title: 'Slider',
                    body: 'Swiper.js'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
                },
                {
                    title: 'Стилизация',
                    body: 'CSS'
                },
                {
                    title: 'Слайдер',
                    body: 'Swiper.js'
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
                    body: 'JSX'
                },
                {
                    title: 'UI',
                    body: 'React.JS'
                },
                {
                    title: 'Styles',
                    body: 'CSS'
                },
            ],
            ru: [
                {
                    title: 'Разметка',
                    body: 'JSX'
                },
                {
                    title: 'Пользовательский интерфейс',
                    body: 'React.JS'
                },
                {
                    title: 'Стилизация',
                    body: 'CSS'
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