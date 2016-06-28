// deps
import React from 'react';
// components
import PostsTop from '../postsTop/postsTop';
import Archive from '../archive/archive';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<section className="sidebar">
        		<PostsTop />
        		<Archive />
        	</section>
        );
    }

}

export default Sidebar;
