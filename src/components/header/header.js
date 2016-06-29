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
                <div className="header__wrapper">
        	        <TopInfo />
                </div>
        	</header>
        );
    }

}

export default Header;
