// deps
import React from 'react';

class BtnLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<a className="btnLink" href={ this.props.href }>
    			{ this.props.children }
    		</a>
        );
    }
}

export default BtnLink;
