// switch mobile menu state
export const SWITCH_FOOTER_STATE = 'SWITCH_FOOTER_STATE';
export function switchFooterState( newState ) {
	return {
		type: SWITCH_FOOTER_STATE,
		newState
	};
};