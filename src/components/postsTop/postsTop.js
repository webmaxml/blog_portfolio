// deps
import React from 'react';
import { connect } from 'react-redux';
// content components
import PostSidebarLink from '../content/postSidebarLink/postSidebarLink';
// helpers
import transition from '../../transition';

class PostsTop extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    render() {
        return (
        	<div className="postsTop" ref={ ref => this.section = ref }>
	        	<h1 className="postsTop__header-line">
	        		<b className="postsTop__header">Топ</b>
	        	</h1>
	        	<ul className="postsTop__list">

	        		{ this.props.data.items.map( ( item, index )  => {
	        			return (
	        				<li className="postsTop__item-line" key={ index }>
			        			<PostSidebarLink href={ item.href }>{ item.title }</PostSidebarLink>
			        		</li>
	        			);
	        		} ) }
	        		
	        	</ul>
	        </div>
	    );
    }

}

function mapStateToProps( state ) {
    return {
        data: state.components.postsTop.data
    };
};

const PostsTopContainer = connect( mapStateToProps )( transition( PostsTop ) );

export default PostsTopContainer;

