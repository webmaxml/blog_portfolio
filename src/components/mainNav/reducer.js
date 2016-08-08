// actions
import { SWITCH_MAIN_NAV_STATE } from './actions';

const initialState = {
	state: {
		catsEnable: {
			value: false,
			stamp: 0
		},
		activeItem: {
			value: 'none',
			stamp: 0
		}
	}
};

function mainNav( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_MAIN_NAV_STATE:
			let catsEnable = typeof action.newState.catsEnable === 'undefined' ? 
								  	state.state.catsEnable :
								  	action.newState.catsEnable;
			let activeItem = typeof action.newState.activeItem === 'undefined' ? 
								  	state.state.activeItem :
								  	action.newState.activeItem;

			// if value = 'toggle', toggle the value
			catsEnable.value = catsEnable.value === 'toggle' ? !state.state.catsEnable.value : catsEnable.value; 

			return _.extend( {}, state, { 
				state: {
					catsEnable,
					activeItem
				}
			} );
		default:
			return state;
	}
};

export default mainNav;