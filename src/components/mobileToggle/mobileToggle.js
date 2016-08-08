// deps
import React from 'react';
import { connect } from 'react-redux';
// actions
import { switchMobileToggleState } from './actions';

class MobileToggle extends React.Component {

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
        console.log( 'mobileToggle - open' );
        this.props.dispatch( switchMobileToggleState({
            open: {
                value: true,
                stamp: Date.now()
            }
        }) );
    }

    touchHandle( event ) {
        this.setState({ click: false });
        console.log( 'mobileToggle - open' );
        this.props.dispatch( switchMobileToggleState({
            open: {
                value: true,
                stamp: Date.now()
            }
        }) );
    }

    render() {
        return (
            <button className="mobileToggle" onClick={ this.clickHandle } onTouchStart={ this.touchHandle }>
                <i className="fa fa-bars mobileToggle-icon"></i>     
            </button>
        );
    }
}

const MobileToggleContainer = connect()( MobileToggle );

export default MobileToggleContainer;
