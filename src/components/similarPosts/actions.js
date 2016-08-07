// form similar posts
export const FORM_SIMILAR_POSTS = 'FORM_SIMILAR_POSTS';
export function formSimilarPosts( fetchData, pageData ) {
	return {
		type: FORM_SIMILAR_POSTS,
		fetchData,
		pageData
	};
};

// switch similar posts state
export const SWITCH_SIMILAR_POSTS_STATE = 'SWITCH_SIMILAR_POSTS_STATE';
export function switchSimilarPostsState( newState ) {
	return {
		type: SWITCH_SIMILAR_POSTS_STATE,
		newState
	};
};

// post similar posts coord value
export const POST_SIMILAR_POSTS_COORD = 'POST_SIMILAR_POSTS_COORD';
export function postSimilarPostsValue( value ) {
	return {
		type: POST_SIMILAR_POSTS_COORD,
		value
	};
};