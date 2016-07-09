// deps
import React from 'react';

class ExcerptFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<footer className="excerptFooter">
    			<div className="excerptFooter__read-wrap">
    				<a className="excerptFooter__read-link" href="#">
    					Читать далее
    				</a>
    			</div>
    			<div className="excerptFooter__comments-wrap">
    				<a className="excerptFooter__comment-link" href="#">
    					2 комментария
    				</a>
    			</div>
    		</footer>
        );
    }

}

export default ExcerptFooter;
