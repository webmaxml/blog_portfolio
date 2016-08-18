// deps
import React from 'react';

class Subscribe extends React.Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind( this );
    }

    submitHandler( event ) {
        event.preventDefault();

        console.log( 'subscribe submitting' );
    }

    render() {
        return (
        	<div className="subscribe">
                <p className="subscribe__text">Хочешь узнать о выходе новой статьи? Подпишись!</p>
                <form className="subscribe__form" onSubmit={ this.submitHandler }>
                    <div className="subscribe__form-group">
                        <i className="fa fa-envelope subscribe__icon" />
                        <input className="subscribe__input" name="email" placeholder="Ваш email" />
                    </div>
                    <button type="submit" className="subscribe__submit">Подписаться</button>
                </form>
        	</div>
        );
    }

}

export default Subscribe;
