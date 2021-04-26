import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGroceryItems } from '../actions';
import groceryItems from '../apis/groceryItems';
import './GroceryBud.scss';

const GroceryBud = ({ fetchGroceryItems }) => {
    useEffect(() => {
        fetchGroceryItems();
        // const loadItems = async () => {
        //     const dispatch = useDispatch();
        //     await dispatch(fetchGroceryItems());
        // };
        // loadItems();
    }, []);

    return(
        <div className="grocery-bud">
            <h2>Grocery Bud</h2>
            <form>
                <input type="text"/>
            </form>
            <div>GroceryList.......</div>
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