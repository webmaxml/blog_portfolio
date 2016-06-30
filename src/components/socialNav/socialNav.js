// deps
import React from 'react';

class SocialNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: props.mode
        }
    }

    render() {
        let classes;
        switch( this.state.mode ) {
            case 'footer':
                classes = 'socialNav socialNav--footer';
                break;
            default:
                classes = 'socialNav';
                break;
        }
        return ( 
        	<ul className={ classes }>
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__icon-wrap">
        				<i className="fa fa-vk socialNav__icon"></i>
        			</a>
        		</li>
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__icon-wrap">
        				<i className="fa fa-instagram socialNav__icon"></i>
        			</a>
        		</li>
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__icon-wrap">
        				<i className="fa fa-youtube socialNav__icon"></i>
        			</a>
        		</li>
        	</ul> 
        );
    }

}

export default SocialNav;
