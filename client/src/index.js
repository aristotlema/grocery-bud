import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';



// https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers
const composedEnchancer = compose(applyMiddleware(thunk), composeWithDevTools());

ReactDOM.render(
    <Provider store={createStore(reducers, composedEnchancer)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);