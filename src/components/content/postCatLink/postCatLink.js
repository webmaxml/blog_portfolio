// deps
import React from 'react';

class PostCatLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<a className="postCatLink" href={ this.props.href }>
                { this.props.children }
            </a>
        );
    }
}

export default PostCatLink;
