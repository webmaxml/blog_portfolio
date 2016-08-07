// switch window state
export const SWITCH_WINDOW_STATE = 'SWITCH_WINDOW_STATE';
export function switchWindowState( newState ) {
	return {
		type: SWITCH_WINDOW_STATE,
		newState
	};
};