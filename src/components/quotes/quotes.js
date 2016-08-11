// deps
import React from 'react';
// components
import QuotesList from '../quotesList/quotesList';

class Quotes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<main className="quotes">
                <div className="quotes__wrap">
            		<QuotesList />
                </div>
        	</main>
        );
    }

}

export default Quotes;
