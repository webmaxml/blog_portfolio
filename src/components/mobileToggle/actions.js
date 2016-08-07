// switch mobile toggle state
export const SWITCH_MOBILE_TOGGLE_STATE = 'SWITCH_MOBILE_TOGGLE_STATE';
export function switchMobileToggleState( newState ) {
	return {
		type: SWITCH_MOBILE_TOGGLE_STATE,
		newState
	};
};