// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import { Link } from 'react-router';
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
        switch ( this.state.mode ) {
            case 'mobile':
                TweenLite.set( this.section, { height:"auto" } );
                TweenMax.from( this.section, .3, { height: 0, opacity: 0, onComplete: callback } );
                break;
            default:
                TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
                break;
        } 
    }

    componentWillLeave( callback ) {
        switch ( this.state.mode ) {
            case 'mobile':
                TweenMax.fromTo( this.section, .3, { height: 'auto', opacity: 1 }, { height: 0, opacity: 0, onComplete: callback } );
                break;
            default:
                callback();
                break;
        } 
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
		        			<Link className="catNav__link" to={ `/cats/${ item.id }/page/1` }>{ item.name }</Link>
		        		</li>
        			);
        		} ) }

        	</ul>
        );
    }

}

function mapStateToProps( state ) {
    return {
        render: state.components.categories.state.render.value,
        data: state.components.categories.ui
    };
};

const CatNavContainer = connect( mapStateToProps )( transition( CatNav ) );

export default CatNavContainer;
