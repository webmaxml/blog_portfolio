// switch mobile menu state
export const SWITCH_MOBILE_MENU_STATE = 'SWITCH_MOBILE_MENU_STATE';
export function switchMobileMenuState( newState ) {
	return {
		type: SWITCH_MOBILE_MENU_STATE,
		newState
	};
};