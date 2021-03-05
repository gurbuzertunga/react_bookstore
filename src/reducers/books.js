import { CREATE_BOOK, REMOVE_BOOK} from "../actionTypes";

const initialState = null;

export default (state=initialState, action) => {
    switch(action.type) {
        case CREATE_BOOK:
            return {
                ...state,
            }
        case REMOVE_BOOK:
            return {
                ...state,
            }
        default:
            state
    }
};
