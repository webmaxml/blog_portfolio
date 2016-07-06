// actions
import { REQUEST_POSTS, 
		 FORM_POST_INDEX } from '../actions';

function posts( state, action ) {
	switch ( action.type ) {
		case REQUEST_POSTS:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case FORM_POST_INDEX:
			const jsonPosts = action.result[0];
			const jsonCats = action.result[1];
			
			return _.extend( {}, state, { 
				isFetching: false,
				needToFetch: false,
				data: {
					render: true,
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
			                content: item.content.rendered,
			                excerpt: item.excerpt.rendered
			            };
					})
				}
			});
		default:
			return state;
	}
};

export default posts;