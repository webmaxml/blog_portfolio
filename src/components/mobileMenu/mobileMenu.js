// deps
import React from 'react';
import TweenMax from 'gsap';
import { connect } from 'react-redux';
// components
import MainNav from '../mainNav/mainNav';
import SearchForm from '../searchForm/searchForm';
// helpers
import transition from '../../transition';
// actions
import { switchMobileMenuState } from './actions';

class MobileMenu extends React.Component {

    constructor(props) {
        super(props);
        this.menuClose = this.menuClose.bind( this );
        this.outClickHandler = this.outClickHandler.bind( this );
    }

    componentWillEnter( callback ) {
        TweenMax.fromTo( this.menu, .3, { width: 0, opacity: 0 }, { width: '100%', opacity: 1, onComplete: callback } );
    }

    componentWillLeave( callback ) {
    	TweenMax.fromTo( this.menu, .3, { width: '100%', opacity: 1 }, { width: 0, opacity: 0, onComplete: callback } );
    }

    componentDidMount() {
        document.addEventListener( 'click', this.outClickHandler );
    }

    outClickHandler( event ) {
        if ( event.target === this.menu ) {
            this.menuClose();
        }
    }

    componentWillUnmount() {
        document.removeEventListener( 'click', this.outClickHandler );
    }

    menuClose() {
        console.log( 'mobileMenu - close' );
        this.props.dispatch( switchMobileMenuState({
            render: {
                value: false,
                stamp: Date.now()
            }
        }) )
    }

    render() {
        return (
        	<div className="mobileMenu" ref={ ref=> this.menu = ref }>
                <div className="mobileMenu__wrap">
            		<SearchForm mode="mobile" />
            		<MainNav mode="mobile" />
                    <button type="button" className="mobileMenu__close-btn" onClick={ this.menuClose }>
                        <i className="fa fa-times mobileMenu__close-icon"></i>
                    </button>
                </div>
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
