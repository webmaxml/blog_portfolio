// switch scrollListener state
export const SWITCH_SCROLLLISTENER_STATE = 'SWITCH_SCROLLLISTENER_STATE';
export function switchScrollListenerState( state ) {
	return {
		type: SWITCH_SCROLLLISTENER_STATE,
		state
	};
};
