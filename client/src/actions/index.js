import groceryItems from '../apis/groceryItems';

export const fetchGroceryItems = () => async dispatch => {
    const res = await groceryItems.get('/');
    dispatch({ 
        type: 'FETCH_GROCERY_ITEMS', 
        payload: res.data
    });
};

export const createGroceryItem = (item) => async dispatch => {
    const res = await groceryItems.post('/', { "name": item } );
    dispatch({
        type: 'CREATE_GROCERY_ITEM',
        payload: res.data
    });
};

export const deleteGroceryItem = (itemId) => async dispatch => {
    await groceryItems.delete(`/${itemId}`);
    dispatch({
        type: 'DELETE_GROCERY_ITEM',
        payload: itemId
    });
};