import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../actionTypes';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
