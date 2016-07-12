// actions
import { RENDER_CATS, 
		 UNRENDER_CATS,
		 TOGGLE_CATS,
		 FORM_CATS } from '../actions';

function categories( state, action ) {
	switch ( action.type ) {
		case RENDER_CATS:
			return _.extend( {}, state, {
				data: { 
					render: true,
					items: [].concat( state.data.items )
				} 
			} );
		case UNRENDER_CATS:
			return _.extend( {}, state, {
				data: { 
					render: false,
					items: [].concat( state.data.items )
				} 
			} );
		case TOGGLE_CATS:
			return _.extend( {}, state, {
				data: { 
					render: !state.data.render,
					items: [].concat( state.data.items )
				} 
			} );
		case FORM_CATS:
			const jsonCats = action.result[0];
			
			return _.extend( {}, state, { 
				data: {
					render: false,
					items: jsonCats.map( item => {	
						return {
			                id: item.id,
			                name: item.name
			            };
					})
				}
			});
		default:
			return state;
	}
};

export default categories;