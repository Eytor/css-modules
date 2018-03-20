import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar-module.css';

const ProgressBar = ({ progress, striped, animated, state }) => {
    var stripes = striped ? styles.stripes : '';
    var animation = animated ? styles.animated : '';
    return(
        <div className={`${styles.progressBar}`} >
            <div style={{width:progress +'%'}} className={`${styles.progress} ${styles[`progress-${state}`]} ${stripes} ${animation}`}  >
                {progress}%
            </div>
        </div>
    )
};

ProgressBar.propTypes = {
    progress: (props, propName) => {
        if (props[propName] >= 0 && props[propName] <=100) {return;}
        return new Error('Number should be between 0 and 100');
    },
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    state: PropTypes.oneOf([ 'info', 'success', 'warning', 'danger' ]).isRequired
};

ProgressBar.defaultProps = {
    striped: false,
    animated: false
};

export default ProgressBar;
