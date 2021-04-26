import groceryItems from '../apis/groceryItems';

export const fetchGroceryItems = () => async dispatch => {
    const res = await groceryItems.get('/');
    dispatch({ 
        type: 'FETCH_GROCERY_ITEMS', 
        payload: res.data
    });
}