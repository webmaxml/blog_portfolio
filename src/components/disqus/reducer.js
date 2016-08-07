// actions
import { SWITCH_DISQUS_STATE } from './actions';

const initialState = {
	state: {
		render: {
			value: false,
			stamp: 0
		}
	}
};

function disqus( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_DISQUS_STATE:
			let render = typeof action.newState.render === 'undefined' ? 
								  	state.state.render :
								  	action.newState.render;
			// if value = 'toggle', toggle the value
			render.value = render.value === 'toggle' ? !state.state.render.value : render.value; 

			return _.extend( {}, state, { 
				state: {
					render
				}
			} );
		default:
			return state;
	}
};

export default disqus;