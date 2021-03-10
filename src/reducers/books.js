import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

const initialState = [
  {
    id: Math.floor(Math.random() * 100), title: 'The Dark Tower', category: 'Horror', author: 'JOHN DOE',
  },
  {
    id: Math.floor(Math.random() * 10), title: 'Fantastic Beast', category: 'Sci-Fi', author: 'j.k Rowlings',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book !== action.payload);
    default:
      return state;
  }
};
