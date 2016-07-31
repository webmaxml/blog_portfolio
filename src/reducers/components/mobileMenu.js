// actions
import { TOGGLE_MOBILE_MENU,
		 HIDE_MOBILE_MENU} from '../../actions';

function mobileMenu( state, action ) {
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