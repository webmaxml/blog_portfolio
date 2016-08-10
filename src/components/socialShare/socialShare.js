// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import { GooglePlusButton, 
         GooglePlusCount, 
         VKontakteButton, 
         VKontakteCount, 
         TwitterButton, 
         TwitterCount } from "react-social";
// content components
import SectionHeader from '../content/sectionHeader/sectionHeader';

class SocialShare extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let url = "http://blog.webmaxml.ru/";
       return (
            <article className="socialShare" ref={ ref => this.section = ref }>
                <h2 className="socialShare__header-line">
                    <SectionHeader>Поделиться</SectionHeader>
                </h2>
                <div className="socialShare__btn-line">
                    <GooglePlusButton url={url} className="socialShare__google-btn">
                        <i className="fa fa-google-plus socialShare__icon"></i>
                        <GooglePlusCount url={url} className="socialShare__count" />
                    </GooglePlusButton>
                    <VKontakteButton url={url} className="socialShare__vk-btn">
                        <i className="fa fa-vk socialShare__icon"></i>
                        <VKontakteCount url={url} className="socialShare__count" />
                    </VKontakteButton>
                    <TwitterButton url={url} className="socialShare__twitter-btn" message={ 'Test test test' }>
                        <i className="fa fa-twitter socialShare__icon"></i>
                        <TwitterCount url={url} className="socialShare__count" />
                    </TwitterButton>
                </div>
            </article>
        ); 
    }
}

export default SocialShare;