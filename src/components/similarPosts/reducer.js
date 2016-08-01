// actions
import { unrenderSimilarPosts,
		 renderSimilarPosts,
		 formSimilarPosts,
		 RENDER_SIMILAR_POSTS,
		 UNRENDER_SIMILAR_POSTS,
		 FORM_SIMILAR_POSTS } from './actions';

const initialState = {
	name: 'similarPosts',
	showOnInit: true,
	toCache: false,
	cached: false,
	hide: unrenderSimilarPosts,
	show: renderSimilarPosts,
	form: formSimilarPosts,
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
		default:
			return state;
	}
};

export default similarPosts;