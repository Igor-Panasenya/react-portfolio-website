import React from 'react';
import './modalMessageSend.scss'
import {GoCheck} from "react-icons/go";
import {useContext} from "react";
import {LangContext} from "../../../App";

const ModalMessageSend = () => {

    const {langEng} = useContext(LangContext)

    return (
        <div className='modal-message-send'>
            <GoCheck size={30}/>
            {langEng ? "Message successfully sent" : "Сообщение отправлено."}
        </div>
    );
};

export default ModalMessageSend;