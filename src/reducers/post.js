// actions
import { RENDER_POST, 
		 UNRENDER_POST, 
		 FORM_POST } from '../actions';

function post( state, action ) {
	switch ( action.type ) {
		case RENDER_POST:
			return _.extend( {}, state, {
				data: { 
					render: true,
					item: _.extend( {}, state.data.item )
				} 
			} );
		case UNRENDER_POST:
			return _.extend( {}, state, {
				data: { 
					render: false,
					item: _.extend( {}, state.data.item )
				} 
			} );
		case FORM_POST:
			const jsonPost = action.result[0];
			const jsonCats = action.result[1];
			
			return _.extend( {}, state, { 
				isFetching: false,
				needToFetch: true,
				data: {
					render: false,
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
		                content: jsonPost.content.rendered,
		                excerpt: jsonPost.excerpt.rendered
			        }
				}
			});
		default:
			return state;
	}
};

export default post;