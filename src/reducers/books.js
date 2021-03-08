import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

const initialState = { books: [{ id: Math.floor(Math.random() * 100), title: 'The Dark Tower', category: 'Horror' }, { id: Math.floor(Math.random() * 10), title: 'Fantastic Beast', category: 'Sci-Fi' }] };

export default (state = initialState, action) => {
  console.log('tes2t');
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      console.log('TRYING TO REMOVE');
      return {
        ...state,
        books: [...state.books.filter(book => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
