// deps
import React from 'react';
import { Link } from 'react-router';

class Logo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="logo">
                <Link to="/" className="logo__img-wrap">
        		  <i className="fa fa-pied-piper logo__img"></i>
                </Link>
                <div className="logo__text-wrap">
            		<div className="logo__text-big-line">
            			<b className="logo__text-big">Lazy Daddy</b>
                    </div>
                    <div className="logo__text-small-line">
            			<small className="logo__text-small">Я пишу здесь когда мне не лень</small>
            		</div>
                </div>
        	</div>
        );
    }
    
}

export default Logo;
