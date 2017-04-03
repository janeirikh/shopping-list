const shoppingListReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SHOPPING_LIST':
            return {
                id: action.payload.id,
                name: action.payload.name,
                complete: false,
                items: []
            }
        default:
            return state;
    }
}

export default shoppingListReducer;