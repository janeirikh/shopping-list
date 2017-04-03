import React from 'react';

const AddShoppingListButton = ({
    handleAddShoppingList,
    newShoppingListName,
    changeListName
}) =>
<form onSubmit={(event) => handleAddShoppingList(event)}>
    <section className="shopping-list-container">
        <div className="shopping-list-input">
            <input 
                type="text" 
                value={newShoppingListName} 
                onChange={changeListName} 
                placeholder="Navn på handleliste" />
        </div>
        <div className="shopping-list-button">
            <button type="submit">Legg til</button>
        </div>
    </section>
</form>;

export default AddShoppingListButton;