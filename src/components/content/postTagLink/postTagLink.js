// deps
import React from 'react';

class PostTagLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<a className="postTagLink" href={ this.props.href }>
                { this.props.children }
            </a>
        );
    }
}

export default PostTagLink;
