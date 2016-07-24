// deps
import React from 'react';
// components
import ContactForm from '../contactForm/contactForm';

class Contact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<article className="contact">
                <h2 className="contact__header">Связаться со мной</h2>
                <ContactForm />
        	</article>
        );
    }

}

export default Contact;
