// actions
import { RENDER_FOOTER, 
		 UNRENDER_FOOTER } from '../../actions';

function footer( state, action ) {
	switch ( action.type ) {
		case RENDER_FOOTER:
			return _.extend( {}, state, {
				data: { 
					render: true
				} 
			} );
		case UNRENDER_FOOTER:
			return _.extend( {}, state, {
				data: { 
					render: false
				} 
			} );
		default:
			return state;
	}
};

export default footer;