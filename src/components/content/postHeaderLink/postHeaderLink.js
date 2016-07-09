// deps
import React from 'react';

class PostHeaderLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<a className="postHeader" href={ this.props.href }>
        		{ this.props.children }
      		</a>
        );
    }
}

export default PostHeaderLink;
