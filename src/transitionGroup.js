// deps
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

class TransitionGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	mounted: false
        }
    }

    componentDidMount() {
    	this.setState({ mounted: true })
    }

    render() {
        return (
        	<ReactTransitionGroup component="ul" className="postSection__list">
        		{ this.state.mounted ? this.props.children : false }
			</ReactTransitionGroup>
        );
    }
}

export default TransitionGroup;
