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
                    <a href="#" className="socialNav__icon-wrap-youtube">
                        <i className="fa fa-youtube-play socialNav__icon"></i>
                    </a>
                </li>
                <li className="socialNav__item">
                    <a href="#" className="socialNav__icon-wrap-twitch">
                        <i className="fa fa-twitch socialNav__icon"></i>
                    </a>
                </li>
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__icon-wrap-vk">
        				<i className="fa fa-vk socialNav__icon"></i>
        			</a>
        		</li>
                <li className="socialNav__item">
                    <a href="#" className="socialNav__icon-wrap-facebook">
                        <i className="fa fa-facebook socialNav__icon"></i>
                    </a>
                </li>
                <li className="socialNav__item">
                    <a href="#" className="socialNav__icon-wrap-google">
                        <i className="fa fa-google-plus socialNav__icon"></i>
                    </a>
                </li>
        		<li className="socialNav__item">
        			<a href="#" className="socialNav__icon-wrap-inst">
        				<i className="fa fa-instagram socialNav__icon"></i>
        			</a>
        		</li>
                <li className="socialNav__item">
                    <a href="#" className="socialNav__icon-wrap-twitter">
                        <i className="fa fa-twitter socialNav__icon"></i>
                    </a>
                </li>
        	</ul> 
        );
    }

}

export default SocialNav;
