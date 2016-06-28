// deps
import React from 'react';
// components
import Header from '../header/header';
import Home from '../home/home';

class App extends React.Component {

    constructor(props) {
        super( props );
    }

    render() {
        return (
            <div className="app">
                <div className="app__wrapper">
                    <Header />
                    <Home />
                </div>
            </div>
        );
    }

}

export default App;