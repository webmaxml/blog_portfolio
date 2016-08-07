// actions
import { SWITCH_MOBILE_TOGGLE_STATE } from './actions';

const initialState = {
	state: {
		open: {
			value: false,
			stamp: 0
		}
	}
};

function mobileToggle( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_MOBILE_TOGGLE_STATE:
			let open = typeof action.newState.open === 'undefined' ? 
							  	state.state.open :
							  	action.newState.open;
			// if value = 'toggle', toggle the value
			open.value = open.value === 'toggle' ? !state.state.open.value : open.value; 

			return _.extend( {}, state, { 
				state: {
					open
				}
			} );
		default:
			return state;
	}
};

export default mobileToggle;