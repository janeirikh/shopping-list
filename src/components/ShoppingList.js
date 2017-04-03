import React from 'react';
import { connect } from 'react-redux';
import addShoppingItem from '../actions/addShoppingItem';
import changeItemName from '../actions/changeItemName';
import toggleShoppingItem from '../actions/toggleShoppingItem';
import removeShoppingItem from '../actions/removeShoppingItem';

const mapStateToProps = (state, { router }) => ({
    shoppingList: state.shoppingLists.shoppingLists.find((list) => list.id === parseInt(router.params.id, 0)),
    newItemName: state.shoppingList.newItemName
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (id, event, itemName) => {
        event.preventDefault();
        dispatch(addShoppingItem(id, itemName));
    },
    changeItemName: (event) => 
        dispatch(changeItemName(event)),
    toggleItem: (shoppingListId, itemId) => 
        dispatch(toggleShoppingItem(shoppingListId, itemId)),
    removeItem: (shoppingListId, itemId, event) => 
        dispatch(removeShoppingItem(shoppingListId, itemId))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        ...stateProps,
        ...dispatchProps,
        addItem: (id, event) => {
            dispatchProps.addItem(id, event, stateProps.newItemName)
        }
    })
}

const ShoppingList = ({
    addItem,
    changeItemName,
    newItemName,
    toggleItem,
    removeItem,
    shoppingList: {
        id,
        name,
        items
    }    
}) =>
    <div className="content">
        <h2>Handleliste:{name}</h2>
        <form onSubmit={addItem.bind(null, id)}>
            <div className="shopping-list-container">
            <div className="shopping-list-input">
                <input 
                    type="text" 
                    onChange={changeItemName} 
                    value={newItemName} 
                    placeholder="produktnavn..." />
            </div>
            <div>
                <button type="submit">Legg til</button>
            </div>
            </div>
        </form>
        <ul className="shopping-list">
            {items.map((item, idx) => 
                <li key={item.id}>
                    <div>
                        <span 
                            className={item.complete ? 'complete' : ''} 
                            onClick={toggleItem.bind(null, id, item.id)}>{item.name}</span>
                    </div>
                    <div>
                        <button onClick={removeItem.bind(null, id, item.id)}>Slett</button>
                    </div>
                </li>
            )}
        </ul>
    </div>;

const ShoppingListContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ShoppingList);

export default ShoppingListContainer;