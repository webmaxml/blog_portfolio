// actions
import { unrenderPost,
		 renderPost,
		 formPost,
		 RENDER_POST, 
		 UNRENDER_POST, 
		 FORM_POST } from './actions';

const initialState = {
	name: 'postItem',
	showOnInit: true,
	toCache: false,
	cached: false,
	hide: unrenderPost,
	show: renderPost,
	form: formPost,
	api: [ 5, 3, 9 ],
	data: {
		render: false,
		item: {}
	}
};

function post( state = initialState, action ) {
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
		default:
			return state;
	}
};

export default post;