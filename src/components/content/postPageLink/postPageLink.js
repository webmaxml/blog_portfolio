// deps
import React from 'react';
import { Link } from 'react-router';

class PostPageLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Link className="postPageLink" to={ this.props.href }>
        		{ this.props.children }
        	</Link>
        );
    }

}

export default PostPageLink;
