// form top posts
export const FORM_POSTS_TOP = 'FORM_POSTS_TOP';
export function formPostsTop( fetchData, pageData ) {
	return {
		type: FORM_POSTS_TOP,
		fetchData,
		pageData
	};
};

// switch posts top state
export const SWITCH_POSTS_TOP_STATE = 'SWITCH_POSTS_TOP_STATE';
export function switchPostsTopState( newState ) {
	return {
		type: SWITCH_POSTS_TOP_STATE,
		newState
	};
};