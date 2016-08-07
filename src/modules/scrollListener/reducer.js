// actions
import { SWITCH_SCROLLLISTENER_STATE, switchScrollListenerState } from './actions';

const initialState = {
	state: 'disqusWaiting',
	actions: {
		switchState: switchScrollListenerState
	}
};

function scrollListener( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_SCROLLLISTENER_STATE:
			return _.extend( {}, state, {
				state: action.state
			} );
		default:
			return state;
	}
};

export default scrollListener;