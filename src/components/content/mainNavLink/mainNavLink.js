// deps
import React from 'react';
import { Link } from 'react-router';

class MainNavLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link to={ this.props.href } className="mainNavLink">
        		{ this.props.children }
        	</Link>
        );
    }

}

export default MainNavLink;
