// actions
import { RENDER_POSTS_TOP,
		 UNRENDER_POSTS_TOP,
		 FORM_POSTS_TOP } from '../../actions';

function postsTop( state, action, helper ) {
	switch ( action.type ) {
		case RENDER_POSTS_TOP:
			return _.extend( {}, state, {
				data: { 
					render: true,
					items: [].concat( state.data.items )
				} 
			} );
		case UNRENDER_POSTS_TOP:
			return _.extend( {}, state, {
				data: { 
					render: false,
					items: [].concat( state.data.items )
				} 
			} );
		case FORM_POSTS_TOP:
			let jsonPosts = action.result[0].response;

			return _.extend( {}, state, { 
				data: {
					render: state.data.render,
					items: jsonPosts.map( item => {
						return {
							title: item.title,
							href: item.link.slice( item.link.search( /\/post/ ) )
						}
					} )
				}
			});
		default:
			return state;
	}
};

export default postsTop;