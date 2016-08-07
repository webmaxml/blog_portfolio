// form archive
export const FORM_ARCHIVE = 'FORM_ARCHIVE';
export function formDateArchive( fetchData, pageData ) {
	return {
		type: FORM_ARCHIVE,
		fetchData,
		pageData
	};
};

// switch archive state
export const SWITCH_ARCHIVE_STATE = 'SWITCH_ARCHIVE_STATE';
export function switchArchiveState( newState ) {
	return {
		type: SWITCH_ARCHIVE_STATE,
		newState
	};
};