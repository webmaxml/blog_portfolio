// deps
import React from 'react';
import { connect } from 'react-redux';
// components
import CatNav from '../catNav/catNav';
// actions
import { renderCats, unrenderCats } from '../../actions';

class MainNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode,
            catShow: false
        }
        this.hoverEnter = this.hoverEnter.bind( this );
        this.hoverLeave = this.hoverLeave.bind( this );
    }

    hoverEnter( event ) {
        this.props.dispatch( renderCats() );
    }

    hoverLeave( event ) {
        this.props.dispatch( unrenderCats() );
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
                    <a href="#" className="mainNav__link mainNav__link--active">Блог</a>
                </li>
    			<li className="mainNav__wrap" 
                    onMouseEnter={ this.hoverEnter }
                    onMouseLeave={ this.hoverLeave }
                    >
        				<a href="#" className={ catsClasses }>Рубрики</a>
                        <CatNav />      
    			</li>
    			<li className="mainNav__wrap">
    				<a href="#" className="mainNav__link">Цитаты</a>
    			</li>
    			<li className="mainNav__wrap">
    				<a href="#" className="mainNav__link">Контакты</a>
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


const MainNavContainer = connect( mapStateToProps )( MainNav );

export default MainNavContainer;
