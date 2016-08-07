// deps
import React from 'react';
import { connect } from 'react-redux';
// helpers
import transition from '../../transition';

class Disqus extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
		if (typeof DISQUS !== 'undefined') {
			DISQUS.reset({
				reload: true,
				config: function () {
					this.page.title = this.props.title;
					this.page.url = `http://localhost:8080/post/${ this.props.id }`;
		        	this.page.identifier = this.props.id;
				}
			});
	    } else {
	    	window.disqus_config = function () {
		        this.page.url = `http://localhost:8080/post/${ this.props.id }`;
		        this.page.identifier = this.props.id;
		    };

	        const script = document.createElement( "script" );

	        script.id = 'disqusMain'
	        script.src = '//ilyablog.disqus.com/embed.js';
	        script.setAttribute( 'data-timestamp', +new Date() );
	        script.async = true;

	        ( document.head || document.body ).appendChild( script ); 
	    }
	}

    render() {
        return <div id="disqus_thread" />;
    }
}

function mapStateToProps( state ) {
    return {
        render: state.components.disqus.state.render.value
    };
};

const DisqusContainer = connect( mapStateToProps )( transition( Disqus ) );

export default DisqusContainer;