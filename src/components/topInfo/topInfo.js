// deps
import React from 'react';
// components
import Logo from '../logo/logo';
import SocialNav from '../socialNav/socialNav';

class TopInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<section className="topInfo">
        		<div className="topInfo__wrap">
	 				<Logo />
	 				<SocialNav mode="default" />
 				</div>
        	</section>
        );
    }

}

export default TopInfo;
