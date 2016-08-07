// deps
import React from 'react';
import TweenMax from 'gsap';
import { connect } from 'react-redux';
// components
import MainNav from '../mainNav/mainNav';
import SearchForm from '../searchForm/searchForm';
// helpers
import transition from '../../transition';

class MobileMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
    	TweenMax.fromTo( this.menu, .3, { width: 0, opacity: 0 }, { width: '80%', opacity: 1, onComplete: callback } );
    }

    componentWillLeave( callback ) {
    	TweenMax.fromTo( this.menu, .3, { width: '80%', opacity: 1 }, { width: 0, opacity: 0, onComplete: callback } );
    }

    render() {
        return (
        	<div className="mobileMenu" ref={ ref=> this.menu = ref }>
        		<SearchForm mode="mobile" />
        		<MainNav mode="mobile" />
        	</div>
        );
    }

}

function mapStateToProps( state ) {
    return {
        render: state.components.mobileMenu.state.render.value
    };
};

const MobileMenuContainer = connect( mapStateToProps )( transition( MobileMenu ) );

export default MobileMenuContainer;
