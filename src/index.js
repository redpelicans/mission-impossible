import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import missions from './data/missions2';
import reducer from './reducers';
import Provider from './providers';
import { createStore } from './store';

const initialState = {
  missions,
  people: [],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
