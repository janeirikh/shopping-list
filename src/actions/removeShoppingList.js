export default function removeShoppingList(id) {
    return {
        type: 'REMOVE_SHOPPING_LIST', 
        payload: id
    }
}