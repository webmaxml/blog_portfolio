// render top posts
export const RENDER_POSTS_TOP = 'RENDER_POSTS_TOP';
export function renderPostsTop() {
	return {
		type: RENDER_POSTS_TOP,
	};
};


// unrender top posts
export const UNRENDER_POSTS_TOP = 'UNRENDER_POSTS_TOP';
export function unrenderPostsTop() {
	return {
		type: UNRENDER_POSTS_TOP,
	};
};

// form top posts
export const FORM_POSTS_TOP = 'FORM_POSTS_TOP';
export function formPostsTop( result ) {
	return {
		type: FORM_POSTS_TOP,
		result
	};
};

// cache top posts
export const CACHE_POSTS_TOP = 'CACHE_POSTS_TOP';
export function cachePostsTop() {
	return {
		type: CACHE_POSTS_TOP,
	};
};