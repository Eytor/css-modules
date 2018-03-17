import React from 'react';
import Proptypes from 'prop-types';
import style from './Namecard-module.css';

const Namecard = ({name, email, telephone, image}) => {
    return (
        <div className={`${style.card}`}>

            <div className={`${style.container}`}>
                    <img src={image} alt='' className={`${style.picture}`} />
                <div className={`${style.text}`}>
                    <div className={`${style.line}`}>Name: {name}</div>
                    <div className={`${style.line}`}>Email: {email}</div>
                    <div className={`${style.line}`}>Tel: {telephone}</div>
                </div>
            </div>
        </div>
    );
};

Namecard.Proptypes = {
    name: Proptypes.string,
    email: Proptypes.string,
    telephone: Proptypes.string,
    image: Proptypes.string.isRequired
}

export default Namecard;
