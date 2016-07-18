// deps
import React from 'react';
import { Link } from 'react-router';

class PostCatLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link className="postCatLink" to={ this.props.href }>
                { this.props.children }
            </Link>
        );
    }
}

export default PostCatLink;
