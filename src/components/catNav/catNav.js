// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
// helpers
import transition from '../../transition';

class CatNav extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
    	TweenMax.fromTo( this.section, .3, { opacity: 0 }, { opacity: 1, onComplete: callback } );
    }

    componentWillLeave( callback ) {
    	TweenMax.fromTo( this.section, .3, { opacity: 1 }, { opacity: 0, onComplete: callback } );
    }

    render() {
        return (
        	<ul className="catNav" ref={ ref => this.section = ref }>
        		<li className="catNav__line">
        			<a className="catNav__link" href="#">Просто жизнь</a>
        		</li>
        		<li className="catNav__line">
        			<a className="catNav__link" href="#">Размышления у камина</a>
        		</li>
        		<li className="catNav__line">
        			<a className="catNav__link" href="#">Бизнес</a>
        		</li>
        		<li className="catNav__line">
        			<a className="catNav__link" href="#">Семейные проблемы</a>
        		</li>
        		<li className="catNav__line">
        			<a className="catNav__link" href="#">Путешествия</a>
        		</li>
        	</ul>
        );
    }

}

function mapStateToProps( state ) {
    return {
        data: state.components.categories.data
    };
};

const CatNavContainer = connect( mapStateToProps )( transition( CatNav ) );

export default CatNavContainer;
