// deps
import React from 'react';
import { connect } from 'react-redux';
// components
import SocialNav from '../socialNav/socialNav';
// helpers
import transition from '../../transition';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<footer className="footer">
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
        data: state.components.footer.data
    };
};

const FooterContainer = connect( mapStateToProps )( transition( Footer ) );

export default FooterContainer;
