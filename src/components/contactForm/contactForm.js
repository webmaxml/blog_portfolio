// deps
import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReCAPTCHA from "react-google-recaptcha";

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmit( data ) {
        console.log( data );
    }

    render() {
    	const { fields: { name, email, message }, handleSubmit } = this.props;
        return (
        	<form className="contactForm" onSubmit={ handleSubmit( data => this.onSubmit( data ) ) }>
        		<div className="contactForm__group-line">
                    <i className="fa fa-user contactForm__icon" />
        			<input id="name" className="contactForm__input" placeholder="Ваше имя" { ...name } />
        		</div>
        		<div className="contactForm__group-line">
                    <i className="fa fa-envelope contactForm__icon" />
        			<input id="email" className="contactForm__input" placeholder="Ваш email" { ...email } />
        		</div>
        		<div className="contactForm__group-line">
                    <i className="fa fa-pencil contactForm__icon" />
        			<textarea id="message" className="contactForm__textarea" placeholder="Текст сообщения" { ...message } />
        		</div>
                <div className="contactForm__centering-line">
                    <ReCAPTCHA sitekey="6LdSYycTAAAAAJmvI2ZYc5bhDL4SAG2kWVV19AJU" />
                </div>
                <div className="contactForm__centering-line">
            		<button type="submit" className="contactForm__submit">Отправить</button>
                </div>
        	</form>
        );	
    }

}

ContactForm = reduxForm({
    form: 'contactForm',
    fields: [ 'name', 'email', 'message' ]
})( ContactForm );

export default ContactForm;
