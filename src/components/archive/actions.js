// render archive
export const RENDER_ARCHIVE = 'RENDER_ARCHIVE';
export function renderDateArchive() {
	return {
		type: RENDER_ARCHIVE,
	};
};


// unrender archive
export const UNRENDER_ARCHIVE = 'UNRENDER_ARCHIVE';
export function unrenderDateArchive() {
	return {
		type: UNRENDER_ARCHIVE,
	};
};

// form archive
export const FORM_ARCHIVE = 'FORM_ARCHIVE';
export function formDateArchive( result ) {
	return {
		type: FORM_ARCHIVE,
		result
	};
};

// cache archive
export const CACHE_ARCHIVE = 'CACHE_ARCHIVE';
export function cacheDateArchive() {
	return {
		type: CACHE_ARCHIVE
	};
};