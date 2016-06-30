// deps
import React from 'react';
import TweenMax from 'gsap';

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
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Январь</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Февраль</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Март</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Апрель</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Май</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Июнь</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Июль</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Август</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Сентябрь</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Октябрь</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Ноябрь</a>
				</li>
				<li className="monthList__month-line">
					<a className="monthList__link" href="#">Декабрь</a>
				</li>
			</ul>
        );
    }

}

export default MonthList;
