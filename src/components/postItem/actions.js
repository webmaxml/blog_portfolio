// form post state
export const FORM_POST = 'FORM_POST';
export function formPost( fetchData, pageData ) {
	return {
		type: FORM_POST,
		fetchData,
		pageData
	};
};

// switch post item state
export const SWITCH_POST_ITEM_STATE = 'SWITCH_POST_ITEM_STATE';
export function switchPostItemState( newState ) {
	return {
		type: SWITCH_POST_ITEM_STATE,
		newState
	};
};