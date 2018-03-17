import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar-module.css';

const ProgressBar = ({ progress, striped, animated, state }) => {
    console.log(styles.progressBar);
    console.log(`${styles[`progress-${state}`]}`);
    return(
        <div className={`{styles.progressBar}`} >
            <div style={{width:state +'%'}} className={`${styles.progress} ${styles[`progress-${state}`]}`}  >
                {progress}%
            </div>
        </div>
    )
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    state: PropTypes.oneOf([ 'info', 'success', 'warning', 'danger']).isRequired
};

export default ProgressBar;
