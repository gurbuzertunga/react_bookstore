import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

export const createBook = () => ({
  type: CREATE_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});
