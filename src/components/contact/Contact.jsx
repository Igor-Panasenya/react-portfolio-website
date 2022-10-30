import React, {useRef, useState} from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaViber} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import {useContext} from "react";
import {LangContext} from "../../App";

import { useForm } from "react-hook-form";
import ErrorText from "../UI/errorText/ErrorText";
import ModalMessageSend from "../UI/modalMessageSend/ModalMessageSend";

const Contact = () => {

    const {langEng} = useContext(LangContext)
    const [sendMessage, setSendMessage] = useState(false);
    setTimeout(setSendMessage, 3000)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const sendEmail = (formData) => {
        emailjs.send('service_54r4e6g', 'template_i2hg9qo', formData, '5kxrwT6WBLgUTAtfW')
            .then((result) => {
            }, (error) => {
            });
        reset();
        setSendMessage(true);
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
                <form onSubmit={handleSubmit(sendEmail)}>

                    <label data-aos="fade-up">
                        <input placeholder={langEng ? "Your Full Name" : "Имя Фамилия Отчество"} {...register('name', {
                            required: {
                                value: true,
                                message: `${langEng ? "The field is required." : "Поле обязательно к заполнению."}`
                            },
                        })} />
                        <div>{errors?.name && <ErrorText text={errors.name.message}/>}</div>
                    </label>
                    <label data-aos="fade-up" data-aos-delay="150">
                        <input placeholder={langEng ? "Your E-mail" : "Ваш E-mail"} {...register('email', {
                            required: {
                                value: true,
                                message: `${langEng ? "The field is required." : "Поле обязательно к заполнению."}`
                            },
                            pattern: {
                                value: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                                message: `${langEng ? "Invalid E-mail." : "Некорректный E-mail."}`
                            }

                        })} />
                        <div>{errors?.email && <ErrorText text={errors.email.message}/>}</div>
                    </label>
                    <label data-aos="fade-up" data-aos-delay="300">
                        <textarea placeholder={langEng ? "Your Message" : "Ваше сообщение"} {...register('message', {
                            required: {
                                value: true,
                                message: `${langEng ? "The field is required." : "Поле обязательно к заполнению."}`
                            },
                            minLength: {
                                value: 10,
                                message: `${langEng ? "No less than 10 characters." : "Не менее 10 символов."}`
                            }

                        })} />
                        <div>{errors?.message && <ErrorText text={errors.message.message}/>}</div>
                    </label>

                    <input type="submit" value={langEng ? "Send message" : "Отправить сообщение"} className="btn btn-primary" data-aos="fade-up" data-aos-delay="450"/>
                    {sendMessage && <ModalMessageSend />}
                </form>

            </div>
        </section>
    );
};

export default Contact;