// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import { Link } from 'react-router';
// components
import SocialNav from '../socialNav/socialNav';
// helpers
import transition from '../../transition';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    render() {
        return (
        	<footer className="footer" ref={ ref => this.section = ref }>
                <div className="footer__wrap">
            		<div className="footer__section">
                        <h3 className="footer__header">Навигация</h3>
                        <ul className="footer__nav">
                            <li className="footer__nav-item">
                                <Link className="footer__nav-link" to="/">Блог</Link>
                            </li>
                            <li className="footer__nav-item">
                                <Link className="footer__nav-link" to="/quotes">Цитаты</Link>
                            </li>
                            <li className="footer__nav-item">
                                <Link className="footer__nav-link" to="/contact">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3 className="footer__header">Теги</h3>
                        <ul className="footer__tagList">
                            <li className="footer__tag-item">
                                <Link className="footer__tag-link" to="/tags/5/page/1">Деньги</Link>
                            </li>
                            <li className="footer__tag-item">
                                <Link className="footer__tag-link" to="/tags/7/page/1">Друзья</Link>
                            </li>
                            <li className="footer__tag-item">
                                <Link className="footer__tag-link" to="/tags/6/page/1">Здоровье</Link>
                            </li>
                            <li className="footer__tag-item">
                                <Link className="footer__tag-link" to="/tags/4/page/1">Семья</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3 className="footer__header">Я в соцсетях</h3>
                        <ul className="footer__socialList">
                            <li className="footer__social-item">
                                <Link className="footer__social-link" to="/">ВКонтакте</Link>
                            </li>
                            <li className="footer__social-item">
                                <Link className="footer__social-link" to="/">Facebook</Link>
                            </li>
                            <li className="footer__social-item">
                                <Link className="footer__social-link" to="/">Twitter</Link>
                            </li>
                            <li className="footer__social-item">
                                <Link className="footer__social-link" to="/">Goggle+</Link>
                            </li>
                            <li className="footer__social-item">
                                <Link className="footer__social-link" to="/">Instagram</Link>
                            </li>
                            <li className="footer__social-item">
                                <Link className="footer__social-link" to="/">Twitch</Link>
                            </li>
                            <li className="footer__social-item">
                                <Link className="footer__social-link" to="/">Youtube</Link>
                            </li>
                        </ul> 
                    </div>
                    <footer className="footer__rights">Все права защищены © 2016–2018</footer>
                </div>
        	</footer>
        );
    }

}

function mapStateToProps( state ) {
    return {
        render: state.components.footer.state.render.value
    };
};

const FooterContainer = connect( mapStateToProps )( transition( Footer ) );

export default FooterContainer;
