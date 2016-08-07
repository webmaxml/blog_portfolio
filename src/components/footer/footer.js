// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
// components
import SocialNav from '../socialNav/socialNav';
// helpers
import transition from '../../transition';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    render() {
        return (
        	<footer className="footer" ref={ ref => this.section = ref }>
                <div className="footer__wrap">
            		<div className="footer__rights-wrap">
            			<span className="footer__rights">
            				Все права защищены @2016-2018 BLOG NAME
            			</span>
            		</div>
            		<SocialNav mode="footer" />
                </div>
        	</footer>
        );
    }

}

function mapStateToProps( state ) {
    return {
        render: state.components.footer.state.render.value
    };
};

const FooterContainer = connect( mapStateToProps )( transition( Footer ) );

export default FooterContainer;
