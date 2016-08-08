// deps
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import store from '../../store';
// components
import CatNav from '../catNav/catNav';
// content components
import MainNavLink from '../content/mainNavLink/mainNavLink';
// actions
import { switchMainNavState } from './actions';

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
        this.props.dispatch( switchMainNavState({
            catsEnable: {
                value: true,
                stamp: Date.now()
            }
        }) );
    }

    hoverLeave( event ) {
        this.props.dispatch( switchMainNavState({
            catsEnable: {
                value: false,
                stamp: Date.now()
            }
        }) );
    }

    touchHandle( event ) {
        if ( event.target === this.catsItem || 
             event.target === this.catsTitle ) {

            this.props.dispatch( switchMainNavState({
                catsEnable: {
                    value: 'toggle',
                    stamp: Date.now()
                }
            }) );
        }
    }

    render() { 
        const itemClass = 'mainNav__link';
        const itemActiveClass = 'mainNav__link mainNav__link--active';
        const navClass = 'mainNav';
        const navMobileClass = 'mainNav mainNav--mobile';

        let mainClass = this.state.mode === 'mobile' ? navMobileClass : navClass;
        let blogClass = this.props.activeItem === 'blog' ? itemActiveClass : itemClass;
        let catsClass = this.props.catsOpen ? itemActiveClass : itemClass; 
        let quoteClass = this.props.activeItem === 'quotes' ? itemActiveClass : itemClass;
        let contactClass = this.props.activeItem === 'contact' ? itemActiveClass : itemClass;

        return (
        	<ul className={ mainClass }>
                <li className="mainNav__wrap">
                   <Link className={ blogClass } to="/">Блог</Link>
                </li>
    			<li className="mainNav__wrap" 
                    onMouseEnter={ this.hoverEnter }
                    onMouseLeave={ this.hoverLeave }
                    onTouchStart={ this.touchHandle }
                    ref={ ref => this.catsItem = ref }
                    >
        				<span className={ catsClass } ref={ ref => this.catsTitle = ref }>Рубрики</span>
                        <CatNav mode={ this.state.mode } />      
    			</li>
    			<li className="mainNav__wrap">
    				<Link className={ quoteClass } to="/quotes">Цитаты</Link>
    			</li>
    			<li className="mainNav__wrap">
    				<Link className={ contactClass } to="/contact">Контакты</Link>
    			</li>
    		</ul>
        );
    }

}

function mapStateToProps( state ) {
    // the cats render state to switch come classes
    return {
        catsOpen: state.components.categories.state.render.value,
        activeItem: state.components.mainNav.state.activeItem.value
    };
};


const MainNavContainer = connect( mapStateToProps )( MainNav );

export default MainNavContainer;
