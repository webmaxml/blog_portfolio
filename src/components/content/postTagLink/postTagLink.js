// deps
import React from 'react';
import { Link } from 'react-router';

class PostTagLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link className="postTagLink" to={ this.props.href }>
                { this.props.children }
            </Link>
        );
    }
}

export default PostTagLink;
