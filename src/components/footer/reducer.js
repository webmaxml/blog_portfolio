// actions
import { renderFooter,
		 unrenderFooter,
		 RENDER_FOOTER, 
		 UNRENDER_FOOTER } from './actions';

const initialState = {
	showOnInit: true,
	toCache: false,
	cached: false,
	hide: unrenderFooter,
	show: renderFooter,
	api: [],
	data: { render: false }
};

function footer( state = initialState, action ) {
	switch ( action.type ) {
		case RENDER_FOOTER:
			return _.extend( {}, state, {
				data: { 
					render: true
				} 
			} );
		case UNRENDER_FOOTER:
			return _.extend( {}, state, {
				data: { 
					render: false
				} 
			} );
		default:
			return state;
	}
};

export default footer;