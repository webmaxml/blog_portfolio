// actions
import { SWITCH_POST_ITEM_STATE, FORM_POST } from './actions';

const initialState = {
	api: [ 5, 3, 9 ],
	ui: {
		item: {}
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

function post( state = initialState, action ) {
	switch ( action.type ) {
		case FORM_POST:
			const jsonPost = action.fetchData[0];
			const jsonCats = action.fetchData[1];
			const jsonTags = action.fetchData[2];
			
			return _.extend( {}, state, { 
				ui: {
					item: {
		                id: jsonPost.id,
		                date: new Date( jsonPost.date ).toLocaleDateString( 'ru', { day: 'numeric', month: 'long', year: 'numeric' } ),
		                title: jsonPost.title.rendered,
		                cats: jsonPost.categories.map( cat => {

		                	// item.category contains array of id's
		                	// find the cat object in the jsonCats
		                	const catObj = _.find( jsonCats, obj => obj.id === cat );
		                	return {
		                		id: catObj.id,
		                		title: catObj.name
		                	}
		                } ),
		                tags: jsonPost.tags.map( tag => {

		                	// item.tags contains array of id's
		                	// find the tag object in the jsonTags
		                	const tagObj = _.find( jsonTags, obj => obj.id === tag );
		                	return {
		                		id: tagObj.id,
		                		title: tagObj.name
		                	}
		                } ), 
		                content: jsonPost.content.rendered
			        }
				}
			});
		case SWITCH_POST_ITEM_STATE:
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

export default post;