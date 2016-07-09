// deps
import React from 'react';

class PostCommentsLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<a className="postCommentsLink" href={ this.props.href }>
                { this.props.children }
            </a>
        );
    }

}

export default PostCommentsLink;
