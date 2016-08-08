// change page title
export const CHANGE_PAGE_TITLE = 'CHANGE_PAGE_TITLE';
export function changePageTitle( title ) {
	return {
		type: CHANGE_PAGE_TITLE,
		title
	};
};