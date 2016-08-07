// switch main nav state
export const SWITCH_MAIN_NAV_STATE = 'SWITCH_MAIN_NAV_STATE';
export function switchMainNavState( newState ) {
	return {
		type: SWITCH_MAIN_NAV_STATE,
		newState
	};
};