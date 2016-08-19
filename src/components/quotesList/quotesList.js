// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
// components
import QuotesShare from '../quotesShare/quotesShare';
// helpers
import transition from '../../transition';

class QuotesList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    getContent() {
        return this.props.children;
    }

    render() {
        return (
        	<ul className="quotesList" ref={ ref => this.section = ref } >

                { this.props.data.items.map( item => {
                    return (
                        <li className="quotesList__item-wrap" key={ item.id }>
                            <blockquote className="quotesList__item">
                                <div className="quotesList__content">
                                    <p className="quotesList__item-text" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                                    <i className="fa fa-quote-left quotesList__open-quote" />
                                    <i className="fa fa-quote-right quotesList__close-quote" />
                                </div>
                                <footer className="quotesList__item-footer">
                                    <QuotesShare />
                                    { item.author ? <cite className="quotesList__author">{ item.author }</cite> : null }
                                </footer>  
                            </blockquote>
                        </li>
                    );
                } ) }

        	</ul>
        );
    }

}

function mapStateToProps( state ) {
    return {
        render: state.components.quotes.state.render.value,
        data: state.components.quotes.ui
    };
};

const QuotesListContainer = connect( mapStateToProps )( transition( QuotesList ) );

export default QuotesListContainer;


