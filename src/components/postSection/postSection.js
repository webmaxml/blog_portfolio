// deps
import React from 'react';

class PostSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<section className="postSection">
                { this.props.children }
        	</section>
        );
    }

};

export default PostSection;