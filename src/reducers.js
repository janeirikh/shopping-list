import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shoppingListsReducer from './reducers/shoppingListsReducer';

const shoppingListReducers = combineReducers({
    shoppingLists: shoppingListsReducer,
    routing: routerReducer
});

export default shoppingListReducers;