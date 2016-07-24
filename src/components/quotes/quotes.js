// deps
import React from 'react';

class Quotes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<main className="quotes">
                <div className="quotes__wrap">
            		{ this.props.children }
                </div>
        	</main>
        );
    }

}

export default Quotes;
