// deps
import React from 'react';

function SmoothAppear( Component ) {

	class Container extends React.Component {

	    constructor(props) {
	        super(props);
	    }

	    componentDidMount() {
	        this.animateAppear();
	    }

	    componentDidUpdate() {
	        this.animateAppear();
	    }

	    animateAppear() {
	        if ( this.props.data.render ) {
	            this.section.style.opacity = 1;
	        }
	    }

	    render() {
	       return (
	            <div className="smoothAppear" ref={ ref => this.section = ref }>
	                { this.props.data.render ? 
	                    <Component { ...this.props.data } /> : false
	                }
	            </div>
	        );    
	    }
	}

	return Container;
}

export default SmoothAppear;