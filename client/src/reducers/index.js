import { combineReducers } from 'redux';

const groceryItemsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_GROCERY_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    groceryItems: groceryItemsReducer
});