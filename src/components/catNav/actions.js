// form cats state
export const FORM_CATS = 'FORM_CATS';
export function formCats( result ) {
	return {
		type: FORM_CATS,
		result
	};
};

// switch cats state
export const SWITCH_CATS_STATE = 'SWITCH_CATS_STATE';
export function switchCatsState( newState ) {
	return {
		type: SWITCH_CATS_STATE,
		newState
	};
};