// actions
import { SWITCH_POSTS_TOP_STATE, FORM_POSTS_TOP } from './actions';

const initialState = {
	api: [ 13 ],
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
		}
	}
};

function postsTop( state = initialState, action ) {
	switch ( action.type ) {
		case FORM_POSTS_TOP:
			let jsonPosts = action.fetchData[0].response;

			return _.extend( {}, state, { 
				ui: {
					items: jsonPosts.map( item => {
						return {
							title: item.title,
							href: item.link.slice( item.link.search( /\/post/ ) )
						}
					} )
				}
			});
		case SWITCH_POSTS_TOP_STATE:
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

			// if value = 'toggle', toggle the value
			needToFetch.value = needToFetch.value === 'toggle' ? !state.state.needToFetch.value : needToFetch.value;
			isFetched.value = isFetched.value === 'toggle' ? !state.state.isFetched.value : isFetched.value;
			isFormed.value = isFormed.value === 'toggle' ? !state.state.isFormed.value : isFormed.value;
			isCached.value = isCached.value === 'toggle' ? !state.state.isCached.value : isCached.value;
			render.value = render.value === 'toggle' ? !state.state.render.value : render.value;

			return _.extend( {}, state, { 
				state: {
					render,
					needToFetch,
					isFetched,
					isFormed,
					isCached
				}
			} );
		default:
			return state;
	}
};

export default postsTop;