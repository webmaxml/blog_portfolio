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