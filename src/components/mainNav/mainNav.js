// deps
import React from 'react';

class MainNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<section className="mainNav">
        		<ul className="mainNav__nav">
        			<li className="mainNav__nav-item">
        				<a href="#" className="mainNav__nav-link">Рубрики</a>
        			</li>
        			<li className="mainNav__nav-item">
        				<a href="#" className="mainNav__nav-link">Цитаты</a>
        			</li>
        			<li className="mainNav__nav-item">
        				<a href="#" className="mainNav__nav-link">Контакты</a>
        			</li>
        		</ul>
        		<form className="mainNav__search">
        			<input type="text" className="mainNav__search-input" placeholder="поиск..."/>
        			<button className="mainNav__search-btn">
        				<i className="fa fa-search mainNav__search-icon"></i>
        			</button>
        		</form>
                <button className="mainNav__toggle">
                    <i className="fa fa-bars mainNav__toggle-icon"></i>
                </button>
        	</section>
        );
    }

}

export default MainNav;
