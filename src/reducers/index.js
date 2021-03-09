import { combineReducers } from 'redux';
import books from './books';
import filters from './filter';

export default combineReducers({ books, filters });
