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
        console.log( 'mobileToggle - toggling' );
        this.props.dispatch( switchMobileToggleState({
            open: {
                value: 'toggle',
                stamp: Date.now()
            }
        }) );
    }

    touchHandle( event ) {
        this.setState({ click: false });
        console.log( 'mobileToggle - toggling' );
        this.props.dispatch( switchMobileToggleState({
            open: {
                value: 'toggle',
                stamp: Date.now()
            }
        }) );
    }

    render() {
        return (
            <button className="mobileToggle" onClick={ this.clickHandle } onTouchStart={ this.touchHandle }>
                { this.props.open ? <i className="fa fa-times mobileToggle-icon"></i> :
                                    <i className="fa fa-bars mobileToggle-icon"></i> }        
            </button>
        );
    }
}

function mapStateToProps( state ) {
    return {
        open: state.components.mobileToggle.state.open.value
    };
};


const MobileToggleContainer = connect( mapStateToProps )( MobileToggle );

export default MobileToggleContainer;
