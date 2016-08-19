// actions
import { POST_COMPONENT_DATA, SWITCH_FETCH_STATE } from './actions';

const initialState = {
	data: {
		postIndex: null,
		catsNav: null,
		postsTop: null,
		archive: null,
		postItem: null,
		similarPosts: null,
		quotes: null
	},
	state: {
		postIndexReady: {
			value: false,
			stamp: 0
		},
		catsNavReady: {
			value: false,
			stamp: 0
		},
		postsTopReady: {
			value: false,
			stamp: 0
		},
		archiveReady: {
			value: false,
			stamp: 0
		},
		postItemReady: {
			value: false,
			stamp: 0
		},
		similarPostsReady: {
			value: false,
			stamp: 0
		},
		quotesReady: {
			value: false,
			stamp: 0
		}
	}
};

function dataFetch( state = initialState, action ) {
	switch ( action.type ) {
		case POST_COMPONENT_DATA:
			let postIndex = typeof action.data.postIndex === 'undefined' ? 
								  	state.data.postIndex :
								  	action.data.postIndex;
			let catsNav = typeof action.data.catsNav === 'undefined' ? 
								  	state.data.catsNav :
								  	action.data.catsNav;
			let postsTop = typeof action.data.postsTop === 'undefined' ? 
								  	state.data.postsTop :
								  	action.data.postsTop;
			let archive = typeof action.data.archive === 'undefined' ? 
								  	state.data.archive :
								  	action.data.archive;
			let postItem = typeof action.data.postItem === 'undefined' ? 
								  	state.data.postItem :
								  	action.data.postItem;
			let similarPosts = typeof action.data.similarPosts === 'undefined' ? 
								  	state.data.similarPosts :
								  	action.data.similarPosts;
			let quotes = typeof action.data.quotes === 'undefined' ? 
								  	state.data.quotes :
								  	action.data.quotes;

			return _.extend( {}, state, {
				data: {
					postIndex,
					catsNav,
					postsTop,
					archive,
					postItem,
					similarPosts,
					quotes
				}
			} );
		case SWITCH_FETCH_STATE:
			let postIndexReady = typeof action.newState.postIndexReady === 'undefined' ? 
								  	state.state.postIndexReady :
								  	action.newState.postIndexReady;
			let catsNavReady = typeof action.newState.catsNavReady === 'undefined' ? 
								  	state.state.catsNavReady :
								  	action.newState.catsNavReady;
			let postsTopReady = typeof action.newState.postsTopReady === 'undefined' ? 
								  	state.state.postsTopReady :
								  	action.newState.postsTopReady;
			let archiveReady = typeof action.newState.archiveReady === 'undefined' ? 
								  	state.state.archiveReady :
								  	action.newState.archiveReady;
			let postItemReady = typeof action.newState.postItemReady === 'undefined' ? 
								  	state.state.postItemReady :
								  	action.newState.postItemReady;
			let similarPostsReady = typeof action.newState.similarPostsReady === 'undefined' ? 
								  	state.state.similarPostsReady :
								  	action.newState.similarPostsReady;
			let quotesReady = typeof action.newState.quotesReady === 'undefined' ? 
								  	state.state.quotesReady :
								  	action.newState.quotesReady;

			return _.extend( {}, state, {
				state: {
					postIndexReady,
					catsNavReady,
					postsTopReady,
					archiveReady,
					postItemReady,
					similarPostsReady,
					quotesReady
				}
			} );
		default:
			return state;
	}
};

export default dataFetch;