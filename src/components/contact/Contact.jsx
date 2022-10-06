import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaViber} from 'react-icons/fa';
import {useRef} from 'react';
import emailjs from 'emailjs-com';
import {useContext} from "react";
import {LangContext} from "../../App";

const Contact = () => {

    const {langEng} = useContext(LangContext)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_54r4e6g', 'template_i2hg9qo', form.current, '5kxrwT6WBLgUTAtfW')
            .then((result) => {
            }, (error) => {
            });
        e.target.reset()
    };


    return (
        <section id='contact'>
            {langEng && <h5>Get In Touch</h5>}
            <h5>{/*Get In Touch*/}</h5>
            <h2>{langEng ? "Contact Me" : "Мои контакты"}</h2>

            <div className="container contact__container">
                <div className="contact__options">

                    <article className="contact__option" data-aos="fade-up">
                        <HiOutlineMail className="contact__option-icon"/>
                        <h4>e-mail</h4>
                        <h5>panasenya1995@mail.ru</h5>
                        <a href="mailto:panasenya1995@mail.ru" target="_blank"> {langEng ? "Send a message" : "Отправить сообщение"}</a>
                    </article>

                    <article className="contact__option" data-aos="fade-up" data-aos-delay="150">
                        <FaTelegramPlane  className="contact__option-icon"/>
                        <h4>Telegram </h4>
                        <h5>@sokolov52</h5>
                        <a href="https://t.me/sokolov52"  target="_blank"> {langEng ? "Send a message" : "Отправить сообщение"}</a>
                    </article>

                    <article className="contact__option" data-aos="fade-up" data-aos-delay="300">
                        <FaViber  className="contact__option-icon"/>
                        <h4>Viber</h4>
                        <h5>+ 375 29 268 57 70</h5>
                        <a href="viber://chat?number=%2B375292685770"  target="_blank"> {langEng ? "Send a message" : "Отправить сообщение"}</a>
                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required  data-aos="fade-up"/>
                    <input type="email" name='email' placeholder='Your Email' required  data-aos="fade-up" data-aos-delay="150"/>
                    <textarea name="message" rows="7" placeholder='Your Message' required data-aos="fade-up" data-aos-delay="300"></textarea>
                    <button type='submit' className="btn btn-primary" data-aos="fade-up" data-aos-delay="450">{langEng ? "Send a message" : "Отправить сообщение"}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;