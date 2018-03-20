import React from 'react';
import PropTypes from 'prop-types';
import style from './Col-module.css';

const Col = ({ size, children, color }) => {
    return (
        <div className={`${style.col} ${style[`col-${size}`]} ${style.block}  `}>{children}</div>
    )
}

Col.propTypes = {
    size: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
    children: PropTypes.string,
    color: PropTypes.string
}

Col.defaultProps = {
    size: 1,
    color: "white"
}

export default Col;
