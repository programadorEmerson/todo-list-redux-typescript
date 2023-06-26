// arquivo em que a redux store é criada
import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import tasksReducer from '../reducers/tasks.reducer';

const store = createStore(tasksReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
