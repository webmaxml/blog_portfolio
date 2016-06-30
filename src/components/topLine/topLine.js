// deps
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
// components
import MainNav from '../mainNav/mainNav';
import SearchForm from '../searchForm/searchForm';
import MobileMenu from '../mobileMenu/mobileMenu';

class TopLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileShow: false
        }

        this.clickHandle = this.clickHandle.bind( this );
    }

    clickHandle() {
        this.setState({ mobileShow: !this.state.mobileShow });
    }

    render() {
        return (
        	<section className="topLine">
                <div className="topLine__wrap">
                    <MainNav mode="default" />
                    <SearchForm mode="default" />
                    <button className="topLine__toggle" onClick={ this.clickHandle }>
                        { this.state.mobileShow ? <i className="fa fa-times topLine__toggle-icon"></i> :
                                                  <i className="fa fa-bars topLine__toggle-icon"></i> }        
                    </button>
                    <ReactTransitionGroup component="div" className="topLine__mobileMenu-wrap">
                        { this.state.mobileShow ? <MobileMenu /> : false }
                    </ReactTransitionGroup>
                </div>
        	</section>
        );
    }
}

export default TopLine;
