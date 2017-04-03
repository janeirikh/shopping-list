export default function addShoppingList(id, name) {
    return {
        type: 'ADD_SHOPPING_LIST', 
        payload: {
            id,
            name}
    }
}