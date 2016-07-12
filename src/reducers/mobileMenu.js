// actions
import { TOGGLE_MOBILE_MENU } from '../actions';

function mobileMenu( state, action ) {
	switch ( action.type ) {
		case TOGGLE_MOBILE_MENU:
			return _.extend( {}, state, {
				data: { 
					render: !state.data.render,
				} 
			} );
		default:
			return state;
	}
};

export default mobileMenu;