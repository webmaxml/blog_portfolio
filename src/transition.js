// deps
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';


class FirstChild extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	let children = React.Children.toArray( this.props.children );
        return children[0] || null;
    }
}


function transition( Component ) {

	class Container extends React.Component {

	    constructor(props) {
	        super(props);
	    }

	    render() {
	       return (
	            <ReactTransitionGroup component={ FirstChild }>
	                { this.props.data.render ? 
	                    <Component { ...this.props } /> : null
	                }
	            </ReactTransitionGroup>
	        );    
	    }
	}

	return Container;
}

export default transition;