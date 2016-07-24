// deps
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// components
import CatNav from '../catNav/catNav';
// content components
import MainNavLink from '../content/mainNavLink/mainNavLink';
// actions
import { renderCats, unrenderCats, toggleCats } from '../../actions';

class MainNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        }
        this.hoverEnter = this.hoverEnter.bind( this );
        this.hoverLeave = this.hoverLeave.bind( this );
        this.touchHandle = this.touchHandle.bind( this );
    }

    hoverEnter( event ) {
        this.props.dispatch( renderCats() );
    }

    hoverLeave( event ) {
        this.props.dispatch( unrenderCats() );
    }

    touchHandle( event ) {
        // event.preventDefault();

        if ( event.target === this.catsItem || 
             event.target === this.catsTitle ) {
            this.props.dispatch( toggleCats() );
        }
    }

    render() {
        let classes;
        switch( this.state.mode ) {
            case 'mobile':
                classes = 'mainNav mainNav--mobile';
                break;
            default:
                classes = 'mainNav';
                break;
        };

        let catsClasses = this.props.open ? 'mainNav__link mainNav__link--active' :  
                                            'mainNav__link';
        return (
        	<ul className={ classes }>
                <li className="mainNav__wrap">
                   <MainNavLink href="/">Блог</MainNavLink>
                </li>
    			<li className="mainNav__wrap" 
                    onMouseEnter={ this.hoverEnter }
                    onMouseLeave={ this.hoverLeave }
                    onTouchStart={ this.touchHandle }
                    ref={ ref => this.catsItem = ref }
                    >
        				<span className={ catsClasses } ref={ ref => this.catsTitle = ref }>Рубрики</span>
                        <CatNav mode={ this.state.mode } />      
    			</li>
    			<li className="mainNav__wrap">
    				<MainNavLink href="/quotes">Цитаты</MainNavLink>
    			</li>
    			<li className="mainNav__wrap">
    				<MainNavLink href="/contact">Контакты</MainNavLink>
    			</li>
    		</ul>
        );
    }

}

function mapStateToProps( state ) {
    // transfer the submenu state to switch menu item class
    return {
        open: state.components.categories.data.render
    };
};


const MainNavContainer = connect( mapStateToProps, null, null, { pure: false } )( MainNav );

export default MainNavContainer;
