// render similar posts
export const RENDER_SIMILAR_POSTS = 'RENDER_SIMILAR_POSTS';
export function renderSimilarPosts() {
	return {
		type: RENDER_SIMILAR_POSTS,
	};
};


// unrender similar posts
export const UNRENDER_SIMILAR_POSTS = 'UNRENDER_SIMILAR_POSTS';
export function unrenderSimilarPosts() {
	return {
		type: UNRENDER_SIMILAR_POSTS,
	};
};

// form similar posts
export const FORM_SIMILAR_POSTS = 'FORM_SIMILAR_POSTS';
export function formSimilarPosts( result ) {
	return {
		type: FORM_SIMILAR_POSTS,
		result
	};
};

// post component bottom boundary
export const POST_SIMILAR_POSTS_BOTTOM_BOUNDARY = 'POST_SIMILAR_POSTS_BOTTOM_BOUNDARY';
export function postSimilarPostsBottomBoundary( value ) {
	return {
		type: POST_SIMILAR_POSTS_BOTTOM_BOUNDARY,
		value
	};
};