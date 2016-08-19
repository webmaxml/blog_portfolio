// deps
import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
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

	    let pageHash = store.getState().pages.pageData.hash;
	    if ( pageHash === '#disqus_thread' ) {
	    	window.scrollTo( 0, this.section.getBoundingClientRect().top );
	    }
	}

    render() {
        return <div id="disqus_thread" ref={ ref => this.section = ref }/>;
    }
}

function mapStateToProps( state ) {
    return {
        render: state.components.disqus.state.render.value
    };
};

const DisqusContainer = connect( mapStateToProps )( transition( Disqus ) );

export default DisqusContainer;