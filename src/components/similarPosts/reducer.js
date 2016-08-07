// actions
import { SWITCH_SIMILAR_POSTS_STATE, 
		 FORM_SIMILAR_POSTS, 
		 POST_SIMILAR_POSTS_COORD } from './actions';

const initialState = {
	api: [ 12 ],
	topCoord: null,
	ui: {
		items: []
	},
	state: {
		render: {
			value: false,
			stamp: 0
		},
		needToFetch: {
			value: false,
			stamp: 0
		},
		isFetched: {
			value: false,
			stamp: 0
		},
		isFormed: {
			value: false,
			stamp: 0
		},
		isCached: {
			value: false,
			stamp: 0
		},
		coordPosted: {
			value: false,
			stamp: 0
		}
	}
};

function similarPosts( state = initialState, action ) {
	switch ( action.type ) {
		case FORM_SIMILAR_POSTS:
			let jsonPosts = action.fetchData[0];
			
			return _.extend( {}, state, { 
				ui: {
					items: jsonPosts
				}
			});
		case SWITCH_SIMILAR_POSTS_STATE:
			let needToFetch = typeof action.newState.needToFetch === 'undefined' ? 
								  	state.state.needToFetch :
								  	action.newState.needToFetch;
			let isFetched = typeof action.newState.isFetched === 'undefined' ?  
									  state.state.isFetched :
									  action.newState.isFetched;
			let isFormed = typeof action.newState.isFormed === 'undefined' ?  
									  state.state.isFormed :
									  action.newState.isFormed;
			let isCached = typeof action.newState.isCached === 'undefined' ?  
									  state.state.isCached :
									  action.newState.isCached;
			let render = typeof action.newState.render === 'undefined' ?  
									  state.state.render :
									  action.newState.render;
			let coordPosted = typeof action.newState.coordPosted === 'undefined' ?  
									  state.state.coordPosted :
									  action.newState.coordPosted;

			// if value = 'toggle', toggle the value
			needToFetch.value = needToFetch.value === 'toggle' ? !state.state.needToFetch.value : needToFetch.value;
			isFetched.value = isFetched.value === 'toggle' ? !state.state.isFetched.value : isFetched.value;
			isFormed.value = isFormed.value === 'toggle' ? !state.state.isFormed.value : isFormed.value;
			isCached.value = isCached.value === 'toggle' ? !state.state.isCached.value : isCached.value;
			render.value = render.value === 'toggle' ? !state.state.render.value : render.value;
			coordPosted.value = coordPosted.value === 'toggle' ? !state.state.coordPosted.value : coordPosted.value;

			return _.extend( {}, state, { 
				state: {
					render,
					needToFetch,
					isFetched,
					isFormed,
					isCached,
					coordPosted
				}
			} );
		case POST_SIMILAR_POSTS_COORD:		
			return _.extend( {}, state, { 
				topCoord: action.value
			});
		default:
			return state;
	}
};

export default similarPosts;