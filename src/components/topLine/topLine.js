// deps
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { connect } from 'react-redux';
// components
import MainNav from '../mainNav/mainNav';
import SearchForm from '../searchForm/searchForm';
import MobileMenu from '../mobileMenu/mobileMenu';
import MobileToggle from '../mobileToggle/mobileToggle';

class TopLine extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let mainClass = this.props.scrolled ? 'topLine topLine--scrolled' : 'topLine';

        return (
        	<section className={ mainClass }>
                <div className="topLine__wrap">
                    { this.props.mobileMenuOpen ? null : <MainNav mode="default" /> }
                    <SearchForm mode="default" />
                    <MobileToggle />
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
        mobileMenuOpen: state.components.mobileMenu.state.render.value,
        scrolled: state.modules.windowReducer.state.menuScrollMode.value
    };
};


const TopLineContainer = connect( mapStateToProps )( TopLine );

export default TopLineContainer;
