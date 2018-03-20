import React from 'react';
import PropTypes from 'prop-types';
import style, {show} from './Tabs-module.css';


class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
            children: this.props.children,
            onSelect: this.props.onSelect,
            currentSelectedTab: this.props.currentSelectedTab,
            layout: this.props.layout

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(tabIndex) {
        this.setState({
            currentSelectedTab: tabIndex === this.state.currentSelectedTab ? this.state.activeTabIndex : tabIndex
        });
    }

    render () {
            var children = React.Children.map(this.props.children, child => {
                if (child.props.selectionKey === this.state.currentSelectedTab) {
                    return React.cloneElement(child, {
                        show: show,
                        handleClick: this.handleClick.bind(this),
                        theme: this.state.theme,
                        layout: this.state.layout
                    });
                }
                return React.cloneElement(child, {
                    handleClick: this.handleClick.bind(this),
                    theme: this.state.theme,
                    layout: this.state.layout
                });
            })
            return (
                <div className={`${style.tabs}`}>{children}</div>
            )
    };
}



Tabs.propTypes = {
    theme: PropTypes.oneOf(['light','dark']),
    layout: PropTypes.oneOf(['vertical', 'horizontal']),
    children: PropTypes.node,
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number
}

Tabs.defaultProps = {
    theme: 'light',
    layout: 'horizontal'
}

export default Tabs;
