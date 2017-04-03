import shoppingList from './shoppingListReducer';
import { combineReducers } from 'redux';


const shoppingListsReducer = (state = [], action) => {
    return state;
}

const shoppingListNameReducer = (state = '', action) => {
    return state;
}

export default combineReducers({
    newShoppingListName: shoppingListNameReducer,
    shoppingLists: shoppingListsReducer
});