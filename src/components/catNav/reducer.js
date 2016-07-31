// actions
import { formCats,
		 renderCats,
		 unrenderCats,
		 cacheCats,
		 RENDER_CATS, 
		 UNRENDER_CATS,
		 TOGGLE_CATS,
		 FORM_CATS,
		 CACHE_CATS } from './actions';

const initialState = {
	showOnInit: false,
	toCache: true,
	cached: false,
	hide: unrenderCats,
	show: renderCats,
	form: formCats,
	cache: cacheCats,
	api: [ 3 ],
	data: {
		render: false,
		items: []
	}
};

function categories( state = initialState, action ) {
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
					render: state.data.render,
					items: jsonCats.map( item => {	
						return {
			                id: item.id,
			                name: item.name
			            };
					})
				}
			});
		case CACHE_CATS:
			return _.extend( {}, state, {
				toCache: false,
				cached: true,
			} );
		default:
			return state;
	}
};

export default categories;