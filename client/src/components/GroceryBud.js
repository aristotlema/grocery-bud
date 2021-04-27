import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGroceryItems, createGroceryItem, deleteGroceryItem } from '../actions';
import './GroceryBud.scss';

const GroceryBud = ({ fetchGroceryItems, groceryItems, createGroceryItem, deleteGroceryItem }) => {
    const [enteredItem, setEnteredItem] = useState('');
    useEffect(() => {
        fetchGroceryItems();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createGroceryItem(enteredItem);
        setEnteredItem('');
    };

    const renderGroceryList = groceryItems.map(item => {
        return (
            <div key={item._id}>
                {item.name}
                <button onClick={() => deleteGroceryItem(item._id)}>Delete</button>
            </div>
        );
    });
    return(
        <div className="grocery-bud">
            <h2>Grocery Bud</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text"
                    value={enteredItem}
                    onChange={(e) => setEnteredItem(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <div>{renderGroceryList}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { groceryItems: state.groceryItems };
};

export default connect(
    mapStateToProps,
    { fetchGroceryItems, createGroceryItem, deleteGroceryItem }
)(GroceryBud);