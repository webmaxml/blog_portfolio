// actions
import { SWITCH_FOOTER_STATE } from './actions';

const initialState = {
	state: {
		render: {
			value: false,
			stamp: 0
		}
	}
};

function footer( state = initialState, action ) {
	switch ( action.type ) {
		case SWITCH_FOOTER_STATE:
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

export default footer;