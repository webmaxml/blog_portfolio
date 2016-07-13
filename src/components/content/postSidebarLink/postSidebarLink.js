// deps
import React from 'react';

class PostSidebarLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<a className="postSidebarLink" href={ this.props.href }>
                { this.props.children }
            </a>
        );
    }
}

export default PostSidebarLink;
