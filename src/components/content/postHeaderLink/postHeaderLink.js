// deps
import React from 'react';
import { Link } from 'react-router';

class PostHeaderLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link className="postHeader" to={ this.props.href }>
        		{ this.props.children }
      		</Link>
        );
    }
}

export default PostHeaderLink;
