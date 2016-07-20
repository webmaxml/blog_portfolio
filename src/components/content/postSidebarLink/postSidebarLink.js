// deps
import React from 'react';
import { Link } from 'react-router';

class PostSidebarLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link className="postSidebarLink" to={ this.props.href }>
                { this.props.children }
            </Link>
        );
    }
}

export default PostSidebarLink;
