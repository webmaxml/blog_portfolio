// deps
import React from 'react';

class PostPageLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<a className="postPageLink" href={ this.props.href }>
        		{ this.props.children }
        	</a>
        );
    }

}

export default PostPageLink;
