import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import AddShoppingList from './AddShoppingList';
import changeShoppingListName from '../actions/changeShoppingListName';
import addShoppingList from '../actions/addShoppingList';
import removeShoppingList from '../actions/removeShoppingList';

let nextShoppingListId = 1;

const mapStateToProps = (state) => ({
    shoppingLists: state.shoppingLists.shoppingLists,
    newShoppingListName: state.shoppingLists.newShoppingListName
});

const mapDispatchToProps = (dispatch) => ({
    changeListName: (name) => {
        dispatch(changeShoppingListName(name));
    },
    handleAddShoppingList: (event, newShoppingListName) => {
        event.preventDefault();

        dispatch(addShoppingList(nextShoppingListId++, newShoppingListName));
    },
    deleteShoppingList: (id, event) => {
        event.preventDefault();

        dispatch(removeShoppingList(id));
    }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        ...stateProps,
        ...dispatchProps,
        handleAddShoppingList: (event) => 
            dispatchProps.handleAddShoppingList(event, stateProps.newShoppingListName)
    })
}

const ShoppingLists = ({
    shoppingLists, 
    newShoppingListName,
    handleAddShoppingList,
    deleteShoppingList,
    changeListName
}) => 
    <div className="content">
        <AddShoppingList 
            handleAddShoppingList={handleAddShoppingList} 
            newShoppingListName={newShoppingListName} 
            changeListName={changeListName} />
        <ul className="shopping-list">
            {shoppingLists.map((shoppingList, idx) => 
                <li key={shoppingList.id}>
                    <div>
                        <Link to={`/shoppinglist/${shoppingList.id}`}>{shoppingList.name}</Link>
                    </div>
                    <div>
                        <button onClick={deleteShoppingList.bind(null, shoppingList.id)}>slett</button>
                    </div>
                </li>
            )}
        </ul>
    </div>;

const ShoppingListsContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ShoppingLists);

export default ShoppingListsContainer;