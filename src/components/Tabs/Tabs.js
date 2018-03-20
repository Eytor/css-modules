import React from 'react';
import PropTypes from 'prop-types';
import style from './Tabs-module.css';



export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
            child: this.props.child,
            onSelect: this.props.onSelect

        };
    }
    render () {
        return (
            <div className={`${this.props.theme}`}>
                {React.Children.map(this.props.children, (child, i) => {
                    return (
                        <div onClick={() => this.props.onSelect(child.key)}>{child}</div>
                    )
                })}

            </div>
        );
    };
}



Tabs.propTypes = {
    theme: PropTypes.oneOf(['light','dark']),
    child: PropTypes.node,
    onSelect: PropTypes.func.isRequired,
    currentSelected: PropTypes.number
}

Tabs.defaultProps = {
    theme: 'light',
}
