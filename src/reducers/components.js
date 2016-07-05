// reducers
import posts from './posts';
import categories from './categories';
// actions
import { FORM_POST_INDEX,
		 REQUEST_CATS, 
		 RECEIVE_CATS } from '../actions';

const initialState = {
	'postIndex': {
		needToFetch: true,
		isFetching: false,
		data: {
			render: false,
			items: []
		}
	},
	categories:{
		needToFetch: true,
		isFetching: false,
		data: {
			items: []
		}
	}
};

function components( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_CATS:
		case RECEIVE_CATS:
			return _.extend( {}, state, {
				categories: categories( state.categories, action )
			} );
		case FORM_POST_INDEX:
			return _.extend( {}, state, {
				postIndex: posts( state.postIndex, action )
			} );
		default:
			return state;
	}
};

export default components;