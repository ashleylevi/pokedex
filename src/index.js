import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
 <Provider store={store}><App/></Provider>,
 document.getElementById('root')
);

