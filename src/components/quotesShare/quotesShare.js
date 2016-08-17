// deps
import React from 'react';
import { connect } from 'react-redux';
import { GooglePlusButton, 
         VKontakteButton, 
         TwitterButton, 
         FacebookButton } from "react-social";

class QuotesShare extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let url = "http://blog.webmaxml.ru/";
       return (
            <div className="quotesShare">
                <FacebookButton url={url} className="quotesShare__facebook-btn" appId={ 1234 }>
                    <i className="fa fa-facebook quotesShare__icon"></i>
                </FacebookButton>
                <VKontakteButton url={url} className="quotesShare__vk-btn">
                    <i className="fa fa-vk quotesShare__icon"></i>
                </VKontakteButton>
                <GooglePlusButton url={url} className="quotesShare__google-btn">
                    <i className="fa fa-google-plus quotesShare__icon"></i>
                </GooglePlusButton>
                <TwitterButton url={url} className="quotesShare__twitter-btn" message={ 'Test test test' }>
                    <i className="fa fa-twitter quotesShare__icon"></i>
                </TwitterButton>
            </div>
        ); 
    }
}

export default QuotesShare;