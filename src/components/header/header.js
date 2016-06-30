// deps
import React from 'react';
// components
import TopLine from '../topLine/topLine';
import TopInfo from '../topInfo/topInfo';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<header className="header">
        		<TopLine />
                <div className="header__wrapper">
        	        <TopInfo />
                </div>
        	</header>
        );
    }

}

export default Header;
