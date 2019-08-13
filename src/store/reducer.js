import * as actionTypes from './actionTypes';

const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        list: action.data
      };
    default:
      return state;
  }
};

export default reducer;
