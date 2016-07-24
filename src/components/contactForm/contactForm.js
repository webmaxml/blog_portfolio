// deps
import React from 'react';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<form className="contactForm">
        		<div className="contactForm__group-line">
        			<label htmlFor="name" className="contactForm__label">Имя</label>
        			<input id="name" className="contactForm__input" />
        		</div>
        		<div className="contactForm__group-line">
        			<label htmlFor="email" className="contactForm__label">Email</label>
        			<input id="email" className="contactForm__input" />
        		</div>
        		<div className="contactForm__group-line">
        			<label htmlFor="message" className="contactForm__label">Сообщение</label>
        			<textarea id="message" className="contactForm__textarea" />
        		</div>
        		<div className="contactForm__group-line">
        		<button type="submit" className="contactForm__submit">Отправить</button>
        		</div>
        	</form>
        );	
    }

}

export default ContactForm;
