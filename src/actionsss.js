



/**
 * Mobile Menu
 ************************/



/**
 * Post Index
 ************************/




/**
 * Post
 ************************/

// form post state
export const FORM_POST = 'FORM_POST';
export function formPost( result ) {
	return {
		type: FORM_POST,
		result
	};
};

// form post state from post index
export const FORM_POST_FROM_INDEX = 'FORM_POST_FROM_INDEX';
export function formPostfromIndex( id ) {
	return {
		type: FORM_POST_FROM_INDEX,
		id
	};
};

// render post 
export const RENDER_POST = 'RENDER_POST';
export function renderPost() {
	return {
		type: RENDER_POST,
	};
};


// unrender post
export const UNRENDER_POST = 'UNRENDER_POST';
export function unrenderPost() {
	return {
		type: UNRENDER_POST,
	};
};

// dont fetch post
export const DONT_FETCH_POST = 'DONT_FETCH_POST';
export function dontFetchPost() {
	return {
		type: DONT_FETCH_POST,
	};
};

/**
 * Disqus
 ************************/

// render disqus 
export const RENDER_DISQUS = 'RENDER_DISQUS';
export function renderDisqus() {
	return {
		type: RENDER_DISQUS,
	};
};


// unrender disqus
export const UNRENDER_DISQUS = 'UNRENDER_DISQUS';
export function unrenderDisqus() {
	return {
		type: UNRENDER_DISQUS,
	};
};


/**
 * Categories
 ************************/



// dont fetch cats
export const DONT_FETCH_CATS = 'DONT_FETCH_CATS';
export function dontFetchCats() {
	return {
		type: DONT_FETCH_CATS,
	};
};


/**
 * Footer
 ************************/
/**
 * Similar Posts
 ************************/


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

/**
 * Top posts
 ************************/




/**
 * Date archive
 ************************/





// components list





