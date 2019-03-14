import { FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        characters: action.payload,
        fetching: false,
        error: null
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
