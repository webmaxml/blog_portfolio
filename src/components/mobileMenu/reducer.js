// actions
import { TOGGLE_MOBILE_MENU,
		 HIDE_MOBILE_MENU} from './actions';

const initialState = {
	data: { render: false }
};

function mobileMenu( state = initialState, action ) {
	switch ( action.type ) {
		case TOGGLE_MOBILE_MENU:
			return _.extend( {}, state, {
				data: { 
					render: !state.data.render,
				} 
			} );
		case HIDE_MOBILE_MENU:
			return _.extend( {}, state, {
				data: { 
					render: false,
				} 
			} );
		default:
			return state;
	}
};

export default mobileMenu;