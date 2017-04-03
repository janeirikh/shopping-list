export default function toggleShoppingItem(listId, itemId) {
    return {
        type: 'TOGGLE_SHOPPING_ITEM', 
        payload: {
            shoppingListId: listId, 
            itemId
        }
    }
}