// actions
import { unrenderDisqus,
		 renderDisqus,
		 RENDER_DISQUS, 
		 UNRENDER_DISQUS } from './actions';

const initialState = {
	name: 'disqus',
	showOnInit: true,
	toCache: false,
	cached: false,
	hide: unrenderDisqus,
	show: renderDisqus,
	api: [],
	data: { render: false }
};

function disqus( state = initialState, action ) {
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

export default disqus;