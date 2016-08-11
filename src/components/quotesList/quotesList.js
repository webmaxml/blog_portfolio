// deps
import React from 'react';
// components
import QuotesShare from '../quotesShare/quotesShare';

class QuotesList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<ul className="quotesList">
                <li className="quotesList__item-wrap">
                    <blockquote className="quotesList__item">
                        <p className="quotesList__item-text">
                            Если не знаешь что делать - делай что-нибудь
                            <i className="fa fa-quote-left quotesList__open-quote" />
                            <i className="fa fa-quote-right quotesList__close-quote" />
                        </p>
                        <footer className="quotesList__item-footer">
                            <QuotesShare />
                            <cite className="quotesList__author">Василий Алибабаевич ( Вася )</cite>
                        </footer>  
                    </blockquote>
                </li>
                <li className="quotesList__item-wrap">
                    <blockquote className="quotesList__item">
                        <p className="quotesList__item-text">
                            - Почему Вы сидите и ничего не делаете?<br />
                            - Всё, что не делается - всё к лучшему!
                            <i className="fa fa-quote-left quotesList__open-quote" />
                            <i className="fa fa-quote-right quotesList__close-quote" />
                        </p>
                        <footer className="quotesList__item-footer">
                            <QuotesShare />
                            <cite className="quotesList__author">Someone famous in Source Title</cite>
                        </footer>
                    </blockquote>
                </li>
                <li className="quotesList__item-wrap">
                    <blockquote className="quotesList__item">
                        <p className="quotesList__item-text">
                            А ну нахуй бистро на майдан!
                            <i className="fa fa-quote-left quotesList__open-quote" />
                            <i className="fa fa-quote-right quotesList__close-quote" />
                        </p>
                        <footer className="quotesList__item-footer">
                            <QuotesShare />
                            <cite className="quotesList__author">Виталий Кличко</cite>
                        </footer>
                    </blockquote>
                </li>
                <li className="quotesList__item-wrap">
                    <blockquote className="quotesList__item">
                        <p className="quotesList__item-text">
                            Более 3 лет мы работаем по простой системе продаж на товарах из Китая. Ежедневно мы продаем от 30 единиц товара по всей России. Маржа на каждый товар начинается от 500%. Потенциал рынка настолько высокий, что сегодня наши рекламные специалисты могут приводить по 80-100 клиентов в сутки.
                            <i className="fa fa-quote-left quotesList__open-quote" />
                            <i className="fa fa-quote-right quotesList__close-quote" />
                        </p>
                        <footer className="quotesList__item-footer">
                            <QuotesShare />
                            <cite className="quotesList__author">Виталий Кличко</cite>
                        </footer>
                    </blockquote>
                </li>
        	</ul>
        );
    }

}

export default QuotesList;
