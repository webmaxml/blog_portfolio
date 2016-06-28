import React from 'react';

class Logo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="logo">
        		<i className="fa fa-life-ring logo__img"></i>
        		<div className="logo__text">
        			<b className="logo__text-big">The Blog</b>
        			<small className="logo__text-small">Where I write stuff</small>
        		</div>
        	</div>
        );
    }
    
}

export default Logo;
