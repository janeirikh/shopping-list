import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const ShoppingLists = ({}) => 
    <div className="content">
        <h2>Handlelister...</h2>
    </div>;

const ShoppingListsContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);

export default ShoppingListsContainer;