// switch disqus state
export const SWITCH_DISQUS_STATE = 'SWITCH_DISQUS_STATE';
export function switchDisqusState( newState ) {
	return {
		type: SWITCH_DISQUS_STATE,
		newState
	};
};