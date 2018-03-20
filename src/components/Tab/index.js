import React from 'react';
import PropTypes from 'prop-types';
import style from './Tab-module.css';

const Tab = ({selectionKey, title, children, handleClick, theme, show, layout }) => {
    return (
        <div className={`${style[`${layout}`]}`}>
            <div className={`${style[`${theme}`]}`} onClick={() => handleClick(selectionKey)}>{title}</div>
            <div className={`${style[`box-${theme}`]}  ${show} `}  id={selectionKey}>{selectionKey}</div>
        </div>
    );
}

Tab.propTypes = {
    title: PropTypes.string,
    selectionKey: PropTypes.number.isRequired,
    children: PropTypes.string,

}

export default Tab;
