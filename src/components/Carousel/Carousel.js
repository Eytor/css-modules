import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel-module.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.changeSlide = this.changeSlide.bind(this);
        this.state = {
            images: this.props.images,
            size: this.props.size,
            index: 0
        };
    }
    changeSlide(number) {
        var newIndex = this.state.index + number;
        if (newIndex >= this.state.images.length) {
            this.setState({index: 0});
        }
        else if (newIndex < 0) {
            this.setState({index: (this.state.images.length - 1)});
        }
        else {
            this.setState({index: newIndex});
        }
        console.log(newIndex);
    }
    render () {
        return (
            <div className={`${styles.container} ${styles[`carousel-${this.state.size}`]}`}>
                    <img src={this.state.images[this.state.index]} alt=""/>
                    <a className={`${styles.prev}`} onClick={() => this.changeSlide(-1)}><i className="fas fa-arrow-circle-left"></i></a>
                    <a className={`${styles.next}`} onClick={() => this.changeSlide(1)}><i className="fas fa-arrow-circle-right"></i></a>
            </div>
        )
    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    size: PropTypes.oneOf( ["small", "medium" ,"large"] )
};

Carousel.defaultProps = {
    size: "medium"
};

export default Carousel;
