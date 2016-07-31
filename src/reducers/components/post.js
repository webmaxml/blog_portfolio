// actions
import { RENDER_POST, 
		 UNRENDER_POST, 
		 FORM_POST,
		 FORM_POST_FROM_INDEX,
		 DONT_FETCH_POST } from '../../actions';

function post( state, action, helper ) {
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
		case DONT_FETCH_POST:
			return _.extend( {}, state, {
				needToFetch: false
			} );
		case FORM_POST:
			const jsonPost = action.result[0];
			const jsonCats = action.result[1];
			const jsonTags = action.result[2];
			
			return _.extend( {}, state, { 
				data: {
					render: state.data.render,
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
		case FORM_POST_FROM_INDEX:
			// by helper we receive post index items array
			return _.extend( {}, state, { 
				data: {
					render: state.data.render,
					item: _.find( helper, obj => obj.id == action.id )
				}
			});
		default:
			return state;
	}
};

export default post;