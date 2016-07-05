// actions
import { REQUEST_CATS, 
		 RECEIVE_CATS } from '../actions';

function categories( state, action ) {
	switch ( action.type ) {
		case REQUEST_CATS:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_CATS:
			let items = _.extend( {}, state.data.items );
			let newState = _.extend( {}, state, { isFetching: false, data: { items } } );

			if ( _.isArray( action.json ) ) {
				// json - [ {...}, {...}, ... ]
				// we need - { 'id':{...}, 'id':{...}, ... }
				action.json.map( item => {
					let obj = {};

					// expected object schema
					obj[item.id] = {
		                id: item.id,
		                name: item.name
		            };

					_.extend( newState.data.items, obj );
				} )
			} else {
				// json - {...}
				// we need - { 'id':{...} }
				let obj = {};
				obj[ action.json.id ] = action.json;
				_.extend( newState.data.items, obj );
			};

			_.extend( newState, { needToFetch: false } );

			return newState;
		default:
			return state;
	}
};

export default categories;