// deps
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
// reducers
import pages from '../pages/reducer';
import dateArchive from '../components/archive/reducer';
import postIndex from '../components/postIndex/reducer';
import mobileMenu from '../components/mobileMenu/reducer';
import categories from '../components/catNav/reducer';
import footer from '../components/footer/reducer';
import postsTop from '../components/postsTop/reducer';

const rootReducer = combineReducers({
	pages,
	components: combineReducers({
		postIndex,
		dateArchive,
		mobileMenu,
		categories,
		footer,
		postsTop
	}),
	routing: routerReducer,
	form: reducer
});

export default rootReducer;