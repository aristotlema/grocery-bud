import { combineReducers } from 'redux';

const groceryItemsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_GROCERY_ITEMS':
            return action.payload;
        case 'CREATE_GROCERY_ITEM':
            return [...state, action.payload];
        case 'DELETE_GROCERY_ITEM':
            return state.filter(item => item._id !== action.payload);
        default:
            return state;
    }
};

export default combineReducers({
    groceryItems: groceryItemsReducer
});