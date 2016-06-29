// deps
import React from 'react';
// components
import Header from '../header/header';
import Home from '../home/home';
import Footer from '../footer/footer';

class App extends React.Component {

    constructor(props) {
        super( props );
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }

}

export default App;