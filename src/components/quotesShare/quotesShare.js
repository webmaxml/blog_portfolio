// deps
import React from 'react';
import { connect } from 'react-redux';
import { GooglePlusButton, 
         GooglePlusCount, 
         VKontakteButton, 
         VKontakteCount, 
         TwitterButton, 
         TwitterCount } from "react-social";

class QuotesShare extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let url = "http://blog.webmaxml.ru/";
       return (
            <div className="quotesShare">
                <GooglePlusButton url={url} className="quotesShare__google-btn">
                    <i className="fa fa-google-plus quotesShare__icon"></i>
                    <GooglePlusCount url={url} className="quotesShare__count" />
                </GooglePlusButton>
                <VKontakteButton url={url} className="quotesShare__vk-btn">
                    <i className="fa fa-vk quotesShare__icon"></i>
                    <VKontakteCount url={url} className="quotesShare__count" />
                </VKontakteButton>
                <TwitterButton url={url} className="quotesShare__twitter-btn" message={ 'Test test test' }>
                    <i className="fa fa-twitter quotesShare__icon"></i>
                    <TwitterCount url={url} className="quotesShare__count" />
                </TwitterButton>
            </div>
        ); 
    }
}

export default QuotesShare;