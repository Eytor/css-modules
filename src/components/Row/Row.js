import React from 'react';
import PropTypes from 'prop-types';
import style from './Row-module.css';

const Row = ({children}) => {
    return (
        <div className={`${style.gridContainer}`}>
            <div className={`${style.row}`}>{children}</div>
        </div>
    );
}

Row.propTypes = {
    children: PropTypes.node
}


export default Row;
