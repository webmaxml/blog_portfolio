// form post state
export const FORM_QUOTES = 'FORM_QUOTES';
export function formQuotes( fetchData, pageData ) {
	return {
		type: FORM_QUOTES,
		fetchData,
		pageData
	};
};

// switch quotes state
export const SWITCH_QUOTES_STATE = 'SWITCH_QUOTES_STATE';
export function switchQuotesState( newState ) {
	return {
		type: SWITCH_QUOTES_STATE,
		newState
	};
};