export default function changeShoppingListName(name) {
    return {
        type: 'NEW_SHOPPING_LIST_NAME_CHANGED', 
        payload: name.target.value
    }
}