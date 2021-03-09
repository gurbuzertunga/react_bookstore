import { CHANGE_FILTER } from '../actionTypes';

const initialState = 'All';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
