// actions
import { RENDER_DISQUS, 
		 UNRENDER_DISQUS } from '../../actions';

function footer( state, action ) {
	switch ( action.type ) {
		case RENDER_DISQUS:
			return _.extend( {}, state, {
				data: { 
					render: true
				} 
			} );
		case UNRENDER_DISQUS:
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