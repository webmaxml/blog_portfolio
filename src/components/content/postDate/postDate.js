// deps
import React from 'react';

class PostDate extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<span className="postDate">
        		{ this.props.children }
        	</span>
        );
    }

}

export default PostDate;
