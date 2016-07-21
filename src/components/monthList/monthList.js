// deps
import React from 'react';
import TweenMax from 'gsap';
// content components
import PostSidebarLink from '../content/postSidebarLink/postSidebarLink';

class MonthList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
    	TweenLite.set( this.monthList, { height:"auto" } );
    	TweenMax.from( this.monthList, .3, { height: 0, opacity: 0, onComplete: callback } );
    }

    componentWillLeave( callback ) {
    	TweenMax.fromTo( this.monthList, .3, { height: 'auto', opacity: 1 }, { height: 0, opacity: 0, onComplete: callback } );
    }


    render() {
        return (
        	<ul className="monthList" ref={ ref => this.monthList = ref }>

        		{ this.props.months.map( (item, index) => {
        			return(
        				<li className="monthList__month-line" key={ index }>
							<PostSidebarLink 
							href={ `/archive/page/1?after=${ item.hrefAfter }&before=${ item.hrefBefore }` }
							>{ item.title }</PostSidebarLink>
						</li>
        			);
        		} ) }

			</ul>
        );
    }

}

export default MonthList;
