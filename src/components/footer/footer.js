// deps
import React from 'react';
// components
import SocialNav from '../socialNav/socialNav';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<footer className="footer">
        		<div className="footer__rights-wrap">
        			<span className="footer__rights">
        				Все права защищены @2016-2018 BLOG NAME
        			</span>
        		</div>
        		<ul className="footer__nav-wrap">
        			<li className="footer__nav-item">
        				<a className="footer__nav-link" href="#">Рубрики</a>
        			</li>
        			<li className="footer__nav-item">
        				<a className="footer__nav-link" href="#">Цитаты</a>
        			</li>
        			<li className="footer__nav-item">
        				<a className="footer__nav-link" href="#">Связаться со мной</a>
        			</li>
        			<li className="footer__nav-item">
        				<a className="footer__nav-link" href="#">Поддержать</a>
        			</li>
        		</ul>
        		<SocialNav />
        	</footer>
        );
    }

}

export default Footer;
