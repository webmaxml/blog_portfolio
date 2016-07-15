// actions
import { RENDER_POST_INDEX, 
		 UNRENDER_POST_INDEX, 
		 FORM_POST_INDEX } from '../actions';

function postIndex( state, action ) {
	switch ( action.type ) {
		case RENDER_POST_INDEX:
			return _.extend( {}, state, {
				data: { 
					render: true,
					currPage: state.data.currPage,
					nextPageExist: state.data.nextPageExist,
					items: [].concat( state.data.items )
				} 
			} );
		case UNRENDER_POST_INDEX:
			return _.extend( {}, state, {
				data: { 
					render: false,
					currPage: state.data.currPage,
					nextPageExist: state.data.nextPageExist,
					items: [].concat( state.data.items )
				} 
			} );
		case FORM_POST_INDEX:
			let jsonPosts = action.result[0];
			let jsonCats = action.result[1];
			let nextPagePosts = action.result[2];
			let currPage = +action.result[3];
			
			return _.extend( {}, state, { 
				data: {
					render: state.data.render,
					currPage,
					nextPageExist: nextPagePosts.length > 0,
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