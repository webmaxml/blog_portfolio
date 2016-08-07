// actions
import { SWITCH_WINDOW_STATE } from './actions';

const initialState = {
	state: {
		listenerSet: {
			value: false,
			stamp: 0
		},
		keyPosReached: {
			value: false,
			stamp: 0
		},
	}
};

function windowReducer( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_WINDOW_STATE:
			let listenerSet = typeof action.newState.listenerSet === 'undefined' ? 
								  	state.state.listenerSet :
								  	action.newState.listenerSet;
			let keyPosReached = typeof action.newState.keyPosReached === 'undefined' ? 
								  	state.state.keyPosReached :
								  	action.newState.keyPosReached;

			return _.extend( {}, state, { 
				state: {
					listenerSet,
					keyPosReached
				}
			} );
		default:
			return state;
	}
};

export default windowReducer;