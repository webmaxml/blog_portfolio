// actions
import { REQUEST_POSTS, 
		 RECEIVE_POSTS } from '../actions';

const initialState = {
	isFetching: false,
	items: []
};

function posts( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_POSTS:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_POSTS:
			// // consider not to give any object by link
			// let items = _.extend( {}, state.items );
			// let newState = _.extend( {}, state, { isFetching: false, items } );

			// if ( _.isArray( action.json ) ) {
			// 	// json - [ {...}, {...}, ... ]
			// 	// we need - { 'id':{...}, 'id':{...}, ... }
			// 	action.json.map( item => {
			// 		let obj = {};
			// 		obj[item.id] = item;
			// 		_.extend( newState.items, obj );
			// 	} )
			// } else {
			// 	// json - {...}
			// 	// we need - { 'id':{...} }
			// 	let obj = {};
			// 	obj[ action.json.id ] = action.json;
			// 	_.extend( newState.items, obj );
			// };

			// return newState;

			return _.extend( {}, state, {
				isFetching: true,
				items: action.json
			} );
		default:
			return state;
	}
};

export default posts;