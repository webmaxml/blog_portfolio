// deps
import React from 'react';
// components
import PostSection from '../postSection/postSection';
import Sidebar from '../sidebar/sidebar';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<main className="home">
        		<PostSection />
        		<Sidebar />
        	</main>
        );
    }

}

export default Home;
