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
					items: [].concat( state.data.items )
				} 
			} );
		case UNRENDER_POST_INDEX:
			return _.extend( {}, state, {
				data: { 
					render: false,
					items: [].concat( state.data.items )
				} 
			} );
		case FORM_POST_INDEX:
			const jsonPosts = action.result[0];
			const jsonCats = action.result[1];
			
			return _.extend( {}, state, { 
				data: {
					render: state.data.render,
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