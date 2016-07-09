// deps
import React from 'react';

class PostContent extends React.Component {

    constructor(props) {
        super(props);
    }

    getContent() {
        return this.props.children;
    }

    render() {
        return (
        	<p className="postContent" dangerouslySetInnerHTML={{ __html: this.getContent() }} ></p>
        );
    }

}

export default PostContent;
