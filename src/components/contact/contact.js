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
                <h2 className="contact__header">Контакты</h2>
                <p className="contact__text">
                    Вы можете задать любой вопрос и по мере возможности я на него отвечу. Так же если у вас есть 
                    предложение о сотрудничестве вы можете оставить его здесь
                </p>
                <ContactForm />
        	</article>
        );
    }

}

export default Contact;
