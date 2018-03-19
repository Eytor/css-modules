import React from 'react';
import PropTypes from 'prop-types';
import style from './Tab-module.css';

const Tab = ({selectionKey, title, children }) => {
    console.log(selectionKey);
    console.log(title);
    return (
        <div className={`${style.layout}`} key={selectionKey} title={title} >{children}</div>
    );
}

Tab.propTypes = {
    title: PropTypes.string,
    selectionKey: PropTypes.number.isRequired
}

export default Tab;
