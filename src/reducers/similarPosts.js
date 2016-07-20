// actions
import { RENDER_SIMILAR_POSTS,
		 UNRENDER_SIMILAR_POSTS,
		 FORM_SIMILAR_POSTS } from '../actions';

function post( state, action, helper ) {
	switch ( action.type ) {
		case RENDER_SIMILAR_POSTS:
			return _.extend( {}, state, {
				data: { 
					render: true,
					items: [].concat( state.data.items )
				} 
			} );
		case UNRENDER_SIMILAR_POSTS:
			return _.extend( {}, state, {
				data: { 
					render: false,
					items: [].concat( state.data.items )
				} 
			} );
		case FORM_SIMILAR_POSTS:
			let jsonPosts = action.result[0];
			
			return _.extend( {}, state, { 
				data: {
					render: state.data.render,
					items: jsonPosts
				}
			});
		default:
			return state;
	}
};

export default post;