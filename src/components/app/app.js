// deps
import React from 'react';
import { connect } from 'react-redux';
// components
import Helmet from '../helmet/helmet';
import Header from '../header/header';
import Footer from '../footer/footer';
import MobileMenu from '../mobileMenu/mobileMenu';

class App extends React.Component {

    constructor(props) {
        super( props );
    }

    render() {
        return (
            <div className="app">
                <Helmet />
                <Header />
                { this.props.children }
                <Footer />
                <MobileMenu />
            </div>
        );
    }

}

export default App;
