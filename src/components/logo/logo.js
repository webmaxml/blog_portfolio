import React from 'react';

class Logo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="logo">
                <div className="logo__img-wrap">
        		  <i className="fa fa-life-ring logo__img"></i>
                </div>
                <div className="logo__text-wrap">
            		<div className="logo__text-big-line">
            			<b className="logo__text-big">The Blog</b>
                    </div>
                    <div className="logo__text-small-line">
            			<small className="logo__text-small">Where I write stuff</small>
            		</div>
                </div>
        	</div>
        );
    }
    
}

export default Logo;
