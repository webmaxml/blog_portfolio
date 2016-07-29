// deps
import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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
        			<label htmlFor="name" className="contactForm__label">Имя</label>
        			<input id="name" className="contactForm__input" { ...name } />
        		</div>
        		<div className="contactForm__group-line">
        			<label htmlFor="email" className="contactForm__label">Email</label>
        			<input id="email" className="contactForm__input" { ...email } />
        		</div>
        		<div className="contactForm__group-line">
        			<label htmlFor="message" className="contactForm__label">Сообщение</label>
        			<textarea id="message" className="contactForm__textarea" { ...message } />
        		</div>
        		<div className="contactForm__group-line">
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
