// deps
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
// components
import pages from '../pages/reducer';
import dateArchive from '../components/archive/reducer';
import postIndex from '../components/postIndex/reducer';
import mobileMenu from '../components/mobileMenu/reducer';
import categories from '../components/catNav/reducer';
import footer from '../components/footer/reducer';
import postsTop from '../components/postsTop/reducer';
import postItem from '../components/postItem/reducer';
import disqus from '../components/disqus/reducer';
import similarPosts from '../components/similarPosts/reducer';
import mainNav from '../components/mainNav/reducer';
import mobileToggle from '../components/mobileToggle/reducer';
// modules
import scrollListener from '../modules/scrollListener/reducer';
import dataFetch from '../modules/dataFetch/reducer';
import windowReducer from '../modules/window/reducer';

const rootReducer = combineReducers({
	pages,
	components: combineReducers({
		postIndex,
		dateArchive,
		mobileMenu,
		categories,
		footer,
		postsTop,
		postItem,
		disqus,
		similarPosts,
		mainNav,
		mobileToggle
	}),
	modules: combineReducers({
		scrollListener,
		dataFetch,
		windowReducer
	}),
	routing: routerReducer,
	form: reducer
});

export default rootReducer;