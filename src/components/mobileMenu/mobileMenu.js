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
    	TweenLite.set( this.menu, { height:"auto" } );
    	TweenMax.from( this.menu, .3, { height: 0, opacity: 0, onComplete: callback } );
    }

    componentWillLeave( callback ) {
    	TweenMax.fromTo( this.menu, .3, { height: 'auto', opacity: 1 }, { height: 0, opacity: 0, onComplete: callback } );
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
        data: state.components.mobileMenu.data
    };
};

const MobileMenuContainer = connect( mapStateToProps )( transition( MobileMenu ) );

export default MobileMenuContainer;
