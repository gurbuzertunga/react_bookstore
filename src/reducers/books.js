/* eslint-disable */
import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

const initialState = { books: [{ id: Math.Random(), title: 'The Dark Tower', category: 'Horror' }, { id: Math.Random(), title: 'Fantastic Beast', category: 'Sci-Fi' }] };

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
      };
    case REMOVE_BOOK:
      return {
        ...state,
      };
    default:
      state;
  }
};
