// deps
import React from 'react';

class Disqus extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
		if (typeof DISQUS !== 'undefined') {
			DISQUS.reset({
				reload: true,
				config: function () {
					this.page.title = `Пост id = ${ this.props.id }`;
					this.page.url = `http://localhost:8080/post/${ this.props.id }`;
		        	this.page.identifier = this.props.id;
				}
			});
	    } else {
	    	window.disqus_config = function () {
	    		this.page.title = `Пост id = ${ this.props.id }`;
		        this.page.url = `http://localhost:8080/post/${ this.props.id }`;
		        this.page.identifier = this.props.id;
		    };

	        const script = document.createElement( "script" );

	        script.id = 'disqusMain'
	        script.src = 'http://ilyablog.disqus.com/embed.js';
	        script.setAttribute( 'data-timestamp', +new Date() );
	        script.async = true;

	        ( document.head || document.body ).appendChild( script ); 
	    }
	}

    render() {
        return <div id="disqus_thread" />;
    }
}

export default Disqus;
