// actions
import { unrenderSimilarPosts,
		 renderSimilarPosts,
		 formSimilarPosts,
		 postSimilarPostsBottomBoundary,
		 RENDER_SIMILAR_POSTS,
		 UNRENDER_SIMILAR_POSTS,
		 POST_SIMILAR_POSTS_BOTTOM_BOUNDARY,
		 FORM_SIMILAR_POSTS } from './actions';

const initialState = {
	name: 'similarPosts',
	showOnInit: true,
	toCache: false,
	cached: false,
	hide: unrenderSimilarPosts,
	show: renderSimilarPosts,
	form: formSimilarPosts,
	postBottom: postSimilarPostsBottomBoundary,
	bottomValue: 0,
	api: [ 12 ],
	data: {
		render: false,
		items: []
	}
};

function similarPosts( state = initialState, action ) {
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
		case POST_SIMILAR_POSTS_BOTTOM_BOUNDARY:
			return _.extend( {}, state, {
				bottomValue: action.value
			} );
		default:
			return state;
	}
};

export default similarPosts;