// deps
import initialState from './pages';
import { SWITCH_PAGE_STATE, FORM_PAGE_DATA } from './actions';

function pages( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_PAGE_STATE:
			let currentPage = typeof action.newState.currentPage === 'undefined' ? 
								  	state.state.currentPage :
								  	action.newState.currentPage;
			let pageDataFormed = typeof action.newState.pageDataFormed === 'undefined' ?  
									  state.state.pageDataFormed :
									  action.newState.pageDataFormed;

			return _.extend( {}, state, { 
				state: {
					currentPage,
					pageDataFormed
				}
			} );
		case FORM_PAGE_DATA:
			return _.extend( {}, state, {
				pageData: action.data
			} );
		default:
			return state;
	}
};

export default pages;