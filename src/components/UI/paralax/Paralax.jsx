import React from 'react';
import './paralax.css';
import {useEffect, useState} from "react";

const Paralax = () => {

    const paralaxItems = [
        {
            id: 1,
            IMG: 1,
            speedTranslate: 0.2,
            speedRotate: 0.05,
        },
        {
            id: 2,
            IMG: 2,
            speedTranslate: 0.4,
            speedRotate: 0,
        },
        {
            id: 3,
            IMG: 3,
            speedTranslate: 0.35,
            speedRotate: 0,
        },
        {
            id: 4,
            IMG: 2,
            speedTranslate: 0.6,
            speedRotate: 0,
        },
        {
            id: 5,
            IMG: 1,
            speedTranslate: 0.7,
            speedRotate: 0.05,
        },
        {
            id: 6,
            IMG: 1,
            speedTranslate: 0.5,
            speedRotate: 0.6,
        },
        {
            id: 7,
            IMG: 3,
            speedTranslate: 0.35,
            speedRotate: 0,
        },
        {
            id: 8,
            IMG: 3,
            speedTranslate: 0.5,
            speedRotate: 0.05,
        },
    ]
    const [offsetY, setOffsetY] = useState(0)
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const handleMove = (e) => {
        setMouseX((e.clientX - window.innerWidth/2)/10);
        setMouseY((e.clientY - window.innerHeight/2)/10);
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMove)
        return () => window.removeEventListener('mousemove', handleMove)
    }, [])

    return (
        <div className='paralax'>
            {paralaxItems.map(paralaxItem => (
                <img
                    src={`img/paralax-item-${paralaxItem.IMG}.png`}
                    style={{transform: `translateY(${-offsetY * `${paralaxItem.speedTranslate}`}px) rotate(${-offsetY * `${paralaxItem.speedRotate}`}deg)`}}
                    className={`paralax-${paralaxItem.id}`}
                    alt="paralax"
                />
            ))}

            <img
                src="/img/paralax-mouse-item-1.png"
                className='paralax-mouse'
                alt="paralax"
                style={{transform: `translateX(${mouseX}px) translateY(${mouseY * 0.5}px)`}}
            />
            <img
                src="/img/paralax-mouse-item-2.png"
                className='paralax-mouse'
                alt="paralax"
                style={{transform: `translateX(${mouseX * 0.5}px) translateY(${mouseY}px)`}}
            />
            
        </div>
    );
};

export default Paralax;