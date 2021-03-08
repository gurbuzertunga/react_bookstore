import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

export const createBook = book => ({ // eslint-disable-line
  type: CREATE_BOOK,
});

export const removeBook = book => ({ // eslint-disable-line
  type: REMOVE_BOOK,
});
