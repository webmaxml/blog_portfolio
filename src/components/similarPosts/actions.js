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