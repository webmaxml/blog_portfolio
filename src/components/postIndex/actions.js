// form post index state
export const FORM_POST_INDEX = 'FORM_POST_INDEX';
export function formPostIndex( fetchData, pageData ) {
	return {
		type: FORM_POST_INDEX,
		fetchData,
		pageData
	};
};

// switch post index mode
export const SWITCH_POST_INDEX_MODE = 'SWITCH_POST_INDEX_MODE';
export function switchPostIndexMode( mode ) {
	return {
		type: SWITCH_POST_INDEX_MODE,
		mode
	};
};

// switch post index state
export const SWITCH_POST_INDEX_STATE = 'SWITCH_POST_INDEX_STATE';
export function switchPostIndexState( newState ) {
	return {
		type: SWITCH_POST_INDEX_STATE,
		newState
	};
};