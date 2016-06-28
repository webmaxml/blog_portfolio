// deps
import React from 'react';

class SocialNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
        	<ul className="socialNav">
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__link">
        				<i className="fa fa-vk socialNav__icon"></i>
        			</a>
        		</li>
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__link">
        				<i className="fa fa-instagram socialNav__icon"></i>
        			</a>
        		</li>
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__link">
        				<i className="fa fa-youtube socialNav__icon"></i>
        			</a>
        		</li>
        	</ul> 
        );
    }

}

export default SocialNav;
