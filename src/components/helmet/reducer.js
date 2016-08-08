// actions
import { CHANGE_PAGE_TITLE } from './actions';

const initialState = {
	title: ''
};

function helmet( state = initialState, action ) {
	switch ( action.type ) {
		case CHANGE_PAGE_TITLE:
			return _.extend( {}, state, {
				title: action.title
			} )
		default:
			return state;
	}
};

export default helmet;