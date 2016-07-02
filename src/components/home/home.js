// deps
import React from 'react';
// components
import Sidebar from '../sidebar/sidebar';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<main className="home">
                <div className="home__wrap">
            		{ this.props.children }
            		<Sidebar />
                </div>
        	</main>
        );
    }

}

export default Home;
