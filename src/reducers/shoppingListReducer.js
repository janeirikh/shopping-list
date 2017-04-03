const shoppingListReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SHOPPING_LIST':
            return {
                id: action.payload.id,
                name: action.payload.name,
                items: []
            }
        default:
            return state;
    }
}

export default shoppingListReducer;