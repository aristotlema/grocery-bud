import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGroceryItems } from '../actions';
import './GroceryBud.scss';

const GroceryBud = ({ fetchGroceryItems, groceryItems }) => {
    useEffect(() => {
        fetchGroceryItems();
        // eslint-disable-next-line
    }, []);

    const renderGroceryList = groceryItems.map(item => {
        return <div>{item.name}</div>;
    });
    return(
        <div className="grocery-bud">
            <h2>Grocery Bud</h2>
            <form>
                <input type="text"/>
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
    { fetchGroceryItems }
)(GroceryBud);