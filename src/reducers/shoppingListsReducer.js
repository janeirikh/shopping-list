import shoppingList from './shoppingListReducer';
import { combineReducers } from 'redux';

let nextItemId = 1;

const shoppingListsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_SHOPPING_LIST':
            return [
                ...state,
                shoppingList(undefined, action)
            ]
        case 'REMOVE_SHOPPING_LIST':
            return state.filter((item) => item.id !== action.payload);
        case 'ADD_SHOPPING_ITEM':
            const clonedArray = JSON.parse(JSON.stringify(state));
            const itemToUpdate = clonedArray.find(item => item.id === action.payload.id);
            itemToUpdate.items.push({id: nextItemId++, name: action.payload.newItemName, complete: false});

            return clonedArray;
        case 'REMOVE_SHOPPING_ITEM' : 
            const clonedArray2 = JSON.parse(JSON.stringify(state));
            const selected = clonedArray2.findIndex(item => item.id === action.payload.shoppingListId);
            clonedArray2[selected].items = clonedArray2[selected].items.filter(item => item.id !== action.payload.itemId);

            return clonedArray2;
        case 'TOGGLE_SHOPPING_ITEM' : 
            const clonedArray3 = JSON.parse(JSON.stringify(state));
            const items2 = clonedArray3.find(item => item.id === action.payload.shoppingListId).items;
            const index = items2.findIndex(item => item.id === action.payload.itemId);
            items2[index].complete = !items2[index].complete;

            return clonedArray3;
        default:
            return state;
    }
}

const shoppingListNameReducer = (state = '', action) => {
    switch(action.type) {
        case 'NEW_SHOPPING_LIST_NAME_CHANGED':
            return action.payload;
        case 'ADD_SHOPPING_LIST':
            return '';
        default:
            return state;
    }
}

export default combineReducers({
    newShoppingListName: shoppingListNameReducer,
    shoppingLists: shoppingListsReducer
});