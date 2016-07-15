// deps
import React from 'react';
import { Link } from 'react-router';

class PostCommentsLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link className="postCommentsLink" to={ `${this.props.href}#disqus_thread` }>
                { this.props.children }
            </Link>
        );
    }

}

export default PostCommentsLink;
