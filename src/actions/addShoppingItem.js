export default function addShoppingItem(id, name) {
    return {
        type: 'ADD_SHOPPING_ITEM', 
        payload: {
            id,
            newItemName: name
        }
    }
}