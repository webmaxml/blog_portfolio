// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
// helpers
import transition from '../../transition';

class CatNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        }
    }

    componentWillEnter( callback ) {
    	TweenMax.fromTo( this.section, .3, { opacity: 0 }, { opacity: 1, onComplete: callback } );
    }

    componentWillLeave( callback ) {
    	TweenMax.fromTo( this.section, .3, { opacity: 1 }, { opacity: 0, onComplete: callback } );
    }

    render() {
    	let classes;
        switch( this.state.mode ) {
            case 'mobile':
                classes = 'catNav catNav--mobile';
                break;
            default:
                classes = 'catNav';
                break;
        };

        return (
        	<ul className={ classes } ref={ ref => this.section = ref }>

        		{ this.props.data.items.map( item => {
        			return (
        				<li className="catNav__line" key={ item.id }>
		        			<a className="catNav__link" href="#">{ item.name }</a>
		        		</li>
        			);
        		} ) }

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
