// deps
import React from 'react';
import { Link } from 'react-router';

class BtnLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link className="btnLink" to={ this.props.href }>
    			{ this.props.children }
    		</Link>
        );
    }
}

export default BtnLink;
