// reducers
import mobileMenu from './mobileMenu';
import postIndex from './postIndex';
import categories from './categories';
import post from './post';
// actions
import { TOGGLE_MOBILE_MENU,
		 FORM_POST_INDEX,
		 RENDER_POST_INDEX,
		 UNRENDER_POST_INDEX,
		 FORM_POST,
		 RENDER_POST,
		 UNRENDER_POST,
		 RENDER_CATS, 
		 UNRENDER_CATS,
		 TOGGLE_CATS, 
		 FORM_CATS } from '../actions';

const initialState = {
	'mobileMenu':{
		data: {
			render: false
		}
	},
	'postIndex': {
		needToFetch: true,
		data: {
			render: false,
			items: []
		}
	},
	categories:{
		needToFetch: true,
		data: {
			render: false,
			items: []
		}
	},
	post:{
		needToFetch: true,
		data: {
			render: false,
			item: {}
		}
	}
};

function components( state = initialState, action ) {
	switch ( action.type ) {
		case TOGGLE_MOBILE_MENU:
			return _.extend( {}, state, {
				mobileMenu: mobileMenu( state.mobileMenu, action )
			} );
		case RENDER_CATS:
		case UNRENDER_CATS:
		case TOGGLE_CATS:
		case FORM_CATS:
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