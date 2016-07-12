// deps
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { connect } from 'react-redux';
// components
import MainNav from '../mainNav/mainNav';
import SearchForm from '../searchForm/searchForm';
import MobileMenu from '../mobileMenu/mobileMenu';
// actions
import { toggleMobileMenu } from '../../actions';

class TopLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            click: true
        }

        this.clickHandle = this.clickHandle.bind( this );
        this.touchHandle = this.touchHandle.bind( this );
    }

    clickHandle( event ) {
        if ( !this.state.click ) {
            this.setState({ click: true });
            return;
        }
        this.props.dispatch( toggleMobileMenu() );
    }

    touchHandle( event ) {
        this.setState({ click: false });
        this.props.dispatch( toggleMobileMenu() );
    }

    render() {
        return (
        	<section className="topLine">
                <div className="topLine__wrap">
                    { this.props.mobileShow ? null : <MainNav mode="default" /> }
                    <SearchForm mode="default" />
                    <button className="topLine__toggle" onClick={ this.clickHandle } onTouchStart={ this.touchHandle }>
                        { this.props.mobileShow ? <i className="fa fa-times topLine__toggle-icon"></i> :
                                                  <i className="fa fa-bars topLine__toggle-icon"></i> }        
                    </button>
                    <div className="topLine__mobileMenu-wrap">
                        <MobileMenu />
                    </div>
                </div>
        	</section>
        );
    }
}

function mapStateToProps( state ) {
    return {
        mobileShow: state.components.mobileMenu.data.render
    };
};


const TopLineContainer = connect( mapStateToProps )( TopLine );

export default TopLineContainer;
