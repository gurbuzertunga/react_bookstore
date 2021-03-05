import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';

const state =  { books: [{id:Math.Random(), title:'The Dark Tower', category: 'Horror'}, {id:Math.Random(), title: 'Fantastic Beast', category: 'Sci-Fi'}] };

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
