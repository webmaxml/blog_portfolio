// deps
import store from './store';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

let history = syncHistoryWithStore( browserHistory, store );

export default history;