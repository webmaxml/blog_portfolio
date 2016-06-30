// deps
import React from 'react';

class MainNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
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
        return (
        	<ul className={ classes }>
                <li className="mainNav__wrap">
                    <a href="#" className="mainNav__link mainNav__link--active">Блог</a>
                </li>
    			<li className="mainNav__wrap">
    				<a href="#" className="mainNav__link">Рубрики</a>
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

export default MainNav;
