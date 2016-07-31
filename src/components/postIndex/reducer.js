// actions
import { formPostIndex,
		 renderPostIndex,
		 unrenderPostIndex,
		 switchPostIndex,
		 RENDER_POST_INDEX, 
		 UNRENDER_POST_INDEX, 
		 SWITCH_POST_INDEX,
		 FORM_POST_INDEX } from './actions';

const initialState = {
	name: 'postIndex',
	state: 'posts',
	showOnInit: true,
	toCache: false,
	cached: false,
	hide: unrenderPostIndex,
	show: renderPostIndex,
	form: formPostIndex,
	switchState: switchPostIndex,
	api: [ 1, 2, 3, 4, 8 ],
	data: {
		currPage: 1, 
		navUri: '',
		nextPageExist: false, 
		render: false,
		items: []
	}
};

function postIndex( state = initialState, action ) {
	switch ( action.type ) {
		case RENDER_POST_INDEX:
			return _.extend( {}, state, {
				data: { 
					render: true,
					currPage: state.data.currPage,
					navUri: state.data.navUri,
					params: state.data.params,
					nextPageExist: state.data.nextPageExist,
					items: [].concat( state.data.items )
				} 
			} );
		case UNRENDER_POST_INDEX:
			return _.extend( {}, state, {
				data: { 
					render: false,
					currPage: state.data.currPage,
					navUri: state.data.navUri,
					params: state.data.params,
					nextPageExist: state.data.nextPageExist,
					items: [].concat( state.data.items )
				} 
			} );
		case SWITCH_POST_INDEX:
			let api, componentState;
			switch ( action.state ) {
				case 'cats':
					componentState = 'cats';
					api = [ 6, 7, 3, 4, 8 ];
					break;
				case 'posts':
					componentState = 'posts';
					api = [ 1, 2, 3, 4, 8 ];
					break;
				case 'tags':
					componentState = 'tags';
					api = [ 10, 11, 3, 4, 8 ];
					break;
				case 'archive':
					componentState = 'archive';
					api = [ 15, 16, 3, 4, 8 ];
					break;
				case 'search':
					componentState = 'search';
					api = [ 17, 18, 3, 4, 8 ];
					break;
			};

			return _.extend( {}, state, { 
				api, 
				state: componentState  
			} );

		case FORM_POST_INDEX:
			let jsonPosts = action.result[0];
			let nextPagePosts = action.result[1];
			let jsonCats = action.result[2];
			let currPage = +action.result[3];
			let navUri = action.result[4];
			
			return _.extend( {}, state, { 
				data: {
					render: state.data.render,
					currPage,
					nextPageExist: nextPagePosts.length > 0,
					navUri: navUri.uri,
					params: navUri.params,
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