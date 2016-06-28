// deps
import React from 'react';
// components
import Post from '../post/post';

class PostColumn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<section className="postSection">
        		<ul className="postSection__list">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
        		</ul>
        	</section>
        );
    }

}

export default PostColumn;
