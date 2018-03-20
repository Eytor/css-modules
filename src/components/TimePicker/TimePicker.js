import React from 'react';
import PropTypes from 'prop-types';
import style from './TimePicker-module.css';

const TimePicker = ({ time, format }) => {




}

TimePicker.propTypes = {
    time: PropTypes.func.isRequired,
    format: PropTypes.oneOf([12, 24])
}

TimePicker.defaultProps = {
    format: 24
}

export default TimePicker;
