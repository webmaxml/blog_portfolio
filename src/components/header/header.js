// deps
import React from 'react';
// components
import MainNav from '../mainNav/mainNav';
import TopInfo from '../topInfo/topInfo';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<header className="header">
        		<MainNav />
        		<TopInfo />
        	</header>
        );
    }

}

export default Header;
