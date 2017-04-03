import { combineReducers } from 'redux';

const shoppingItemNameReducer = (state= '', action) => {
    switch (action.type) {
        case 'NEW_ITEM_NAME_CHANGED' : 
            return action.payload;
        case 'ADD_SHOPPING_ITEM':
            return '';
        default:
            return state;
    }
}

export default combineReducers({
    newItemName: shoppingItemNameReducer
});