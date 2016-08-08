// deps
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

class MetaSwitcher extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
       return (
            <Helmet title={ this.props.title } />
        ); 
    }
}


function mapStateToProps( state ) {
    return {
        title: state.components.helmet.title
    };
};

const MetaSwitcherContainer = connect( mapStateToProps )( MetaSwitcher );

export default MetaSwitcherContainer;
