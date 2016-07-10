// reducers
import postIndex from './postIndex';
import categories from './categories';
import post from './post';
// actions
import { FORM_POST_INDEX,
		 RENDER_POST_INDEX,
		 UNRENDER_POST_INDEX,
		 FORM_POST,
		 RENDER_POST,
		 UNRENDER_POST,
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
			render: false,
			items: []
		}
	},
	post:{
		needToFetch: true,
		isFetching: false,
		data: {
			render: false,
			item: {}
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
		case RENDER_POST_INDEX:
		case UNRENDER_POST_INDEX:
		case FORM_POST_INDEX:
			return _.extend( {}, state, {
				postIndex: postIndex( state.postIndex, action )
			} );
		case RENDER_POST:
		case UNRENDER_POST:
		case FORM_POST:
			return _.extend( {}, state, {
				post: post( state.post, action )
			} );
		default:
			return state;
	}
};

export default components;