export default function removeShoppingItem(id, itemId) {
    return {
        type: 'REMOVE_SHOPPING_ITEM', 
        payload: {
            shoppingListId: id, 
            itemId
        }
    }
}