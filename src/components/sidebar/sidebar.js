// deps
import React from 'react';
// components
import PostsTop from '../postsTop/postsTop';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<section className="sidebar">
        		<PostsTop />
        	</section>
        );
    }

}

export default Sidebar;
