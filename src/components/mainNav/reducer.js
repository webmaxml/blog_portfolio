// actions
import { SWITCH_MAIN_NAV_STATE } from './actions';

const initialState = {
	state: {
		catsEnable: {
			value: false,
			stamp: 0
		}
	}
};

function categories( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_MAIN_NAV_STATE:
			let catsEnable = typeof action.newState.catsEnable === 'undefined' ? 
								  	state.state.catsEnable :
								  	action.newState.catsEnable;

			// if value = 'toggle', toggle the value
			catsEnable.value = catsEnable.value === 'toggle' ? !state.state.catsEnable.value : catsEnable.value; 

			return _.extend( {}, state, { 
				state: {
					catsEnable
				}
			} );
		default:
			return state;
	}
};

export default categories;