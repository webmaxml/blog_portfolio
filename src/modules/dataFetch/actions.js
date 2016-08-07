// post component data 
export const POST_COMPONENT_DATA = 'POST_COMPONENT_DATA';
export function postComponentData( data ) {
	return {
		type: POST_COMPONENT_DATA,
		data
	};
};

// switch fetch state
export const SWITCH_FETCH_STATE = 'SWITCH_FETCH_STATE';
export function switchFetchState( newState ) {
	return {
		type: SWITCH_FETCH_STATE,
		newState
	};
};

