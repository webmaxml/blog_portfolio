// deps
import React from 'react';
// components
import PostSection from '../postSection/postSection';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<main className="home">
        		<PostSection />
        	</main>
        );
    }

}

export default Home;
