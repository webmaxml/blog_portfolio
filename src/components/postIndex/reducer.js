// actions
import { SWITCH_POST_INDEX_MODE,
		 FORM_POST_INDEX,
		 SWITCH_POST_INDEX_STATE } from './actions';

const initialState = {
	mode: null,
	api: [],
	ui: {
		currPage: null, 
		navUri: null,
		params: null,
		nextPageExist: false,
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
		}
	}
};

function postIndex( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_POST_INDEX_MODE:
			let api, mode;
			switch ( action.mode ) {
				case 'cats':
					mode = 'cats';
					api = [ 6, 7, 3 ];
					break;
				case 'posts':
					mode = 'posts';
					api = [ 1, 2, 3 ];
					break;
				case 'tags':
					mode = 'tags';
					api = [ 10, 11, 3 ];
					break;
				case 'archive':
					mode = 'archive';
					api = [ 15, 16, 3 ];
					break;
				case 'search':
					mode = 'search';
					api = [ 17, 18, 3 ];
					break;
			};

			return _.extend( {}, state, { api, mode } );
		case SWITCH_POST_INDEX_STATE:
			let needToFetch = typeof action.newState.needToFetch === 'undefined' ? 
								  	state.state.needToFetch :
								  	action.newState.needToFetch;
			let isFetched = typeof action.newState.isFetched === 'undefined' ?  
									  state.state.isFetched :
									  action.newState.isFetched;
			let isFormed = typeof action.newState.isFormed === 'undefined' ?  
									  state.state.isFormed :
									  action.newState.isFormed;
			let render = typeof action.newState.render === 'undefined' ? 
								  	state.state.render :
								  	action.newState.render;

			// if value = 'toggle', toggle the value
			needToFetch.value = needToFetch.value === 'toggle' ? !state.state.needToFetch.value : needToFetch.value; 
			isFetched.value = isFetched.value === 'toggle' ? !state.state.isFetched.value : isFetched.value; 
			isFormed.value = isFormed.value === 'toggle' ? !state.state.isFormed.value : isFormed.value; 
			render.value = render.value === 'toggle' ? !state.state.render.value : render.value; 

			return _.extend( {}, state, { 
				state: {
					render,
					needToFetch,
					isFetched,
					isFormed
				}
			} );
		case FORM_POST_INDEX:
			let jsonPosts = action.fetchData[0];
			let nextPagePosts = action.fetchData[1];
			let jsonCats = action.fetchData[2];
			let currPage = +action.pageData.pageNum;
			let navUri = action.pageData.navUri;
			let params = action.pageData.search;
			
			return _.extend( {}, state, { 
				ui: {
					currPage,
					nextPageExist: nextPagePosts.length > 0,
					navUri,
					params,
					items: jsonPosts.map( item => {	
						return {
			                id: item.id,
			                date: new Date( item.date ).toLocaleDateString( 'ru', { day: 'numeric', month: 'long', year: 'numeric' } ),
			                title: item.title.rendered,
			                cats: item.categories.map( cat => {

			                	// item.category contains array of id's
			                	// find the cat object in the jsonCats
			                	const catObj = _.find( jsonCats, obj => obj.id === cat );
			                	return {
			                		id: catObj.id,
			                		title: catObj.name
			                	}
			                } ),
			                excerpt: item.excerpt.rendered,
			                content: item.content.rendered
			            };
					})
				}
			});
		default:
			return state;
	}
};

export default postIndex;