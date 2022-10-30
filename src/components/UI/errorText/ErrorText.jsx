import React from 'react';
import {BiError} from "react-icons/bi";

const ErrorText = ({text}) => {
    return (
        <p className='error-text'>
            <BiError size={15}/>
            {text}
        </p>
    );
};

export default ErrorText;