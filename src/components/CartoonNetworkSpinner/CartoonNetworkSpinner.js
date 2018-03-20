import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartoonNetworkSpinner-module.css';

class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: ["https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png", "http://i.imgur.com/xIjzDcJ.png", "https://vignette.wikia.nocookie.net/boomerang-from-cartoon-network/images/b/bb/Johnnyb001.gif/revision/latest?cb=20170203155320", "http://moziru.com/images/cartoon-network-clipart-person-animal-11.png"],
            interval: this.props.interval,
            index: 0
        };
    }
    componentDidMount () {
        setInterval(() => {
            this.changeImage();
        }, this.props.interval*1000);
    }
    changeImage = () => {
        var newIndex = this.state.index + 1;
        if (newIndex >= this.state.images.length) {
            this.setState({index: 0});
        }
        else {
            this.setState({index: newIndex});
        }
    }
    render () {
        return (
            <div className={`${styles.spinner}`}>
                <img style={{animation: 'spin ' + this.state.interval +'s infinite'}} src={this.state.images[this.state.index]} alt=""/>
            </div>
        )
    }
}

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number
};

CartoonNetworkSpinner.defaultProps = {
    interval: 3
};

export default CartoonNetworkSpinner;
