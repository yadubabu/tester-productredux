import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './redux/index'


const store=createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>
);


