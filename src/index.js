import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import bookReducer from './reducers/books';

const initialState = {
  books: [{ id: Math.floor(Math.random() * 100), title: 'The Dark Tower', category: 'Horror' },
    { id: Math.floor(Math.random() * 10), title: 'Fantastic Beast', category: 'Sci-Fi' }],
};

const store = createStore(bookReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
