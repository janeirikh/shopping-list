import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shoppingListsReducer from './reducers/shoppingListsReducer';
import shoppingListItemsReducer from './reducers/shoppingListItemsReducer';

const shoppingListReducers = combineReducers({
    shoppingLists: shoppingListsReducer,
    shoppingList: shoppingListItemsReducer,
    routing: routerReducer
});

export default shoppingListReducers;