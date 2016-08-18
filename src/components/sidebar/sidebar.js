// deps
import React from 'react';
// components
import Subscribe from '../subscribe/subscribe';
import PostsTop from '../postsTop/postsTop';
import Archive from '../archive/archive';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<section className="sidebar">
                <Subscribe />
        		<PostsTop />
        		<Archive />
        	</section>
        );
    }

}

export default Sidebar;
