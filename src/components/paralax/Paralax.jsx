import React from 'react';
import './paralax.css';
import {useEffect, useState} from "react";
import IMG1 from '../../img/paralax-item-1.png'
import IMG2 from '../../img/paralax-item-2.png'
import IMG3 from '../../img/paralax-item-3.png'

const Paralax = () => {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='paralax'>
            <img
                src={IMG1}
                style={{transform: `translateY(${-offsetY * 0.2}px) rotate(${-offsetY * 0.05}deg)`}}
                className='paralax-1'
                alt="paralax"
            />
            <img
                src={IMG2}
                style={{transform: `translateY(${-offsetY * 0.4}px)`}}
                className='paralax-2'
                alt="paralax"
            />
            <img
                src={IMG3}
                style={{transform: `translateY(${-offsetY * 0.35}px)`}}
                className='paralax-3'
                alt="paralax"
            />
            <img
                src={IMG2}
                style={{transform: `translateY(${-offsetY * 0.6}px)`}}
                className='paralax-4'
                alt="paralax"
            />
            <img
                src={IMG1}
                style={{transform: `translateY(${-offsetY * 0.7}px) rotate(${-offsetY * 0.05}deg)`}}
                className='paralax-5'
                alt="paralax"
            />
            <img
                src={IMG1}
                style={{transform: `translateY(${-offsetY * 0.5}px) rotate(${-offsetY * 0.6}deg)`}}
                className='paralax-6'
                alt="paralax"
            />
            <img
                src={IMG3}
                style={{transform: `translateY(${-offsetY * 0.35}px)`}}
                className='paralax-7'
                alt="paralax"
            />
            <img
                src={IMG2}
                style={{transform: `translateY(${-offsetY * 0.5}px) rotate(${-offsetY * 0.05}deg)`}}
                className='paralax-8'
                alt="paralax"
            />
        </div>
    );
};

export default Paralax;