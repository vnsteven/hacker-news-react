import * as actionTypes from './actions';

const initialState = {
  initialList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return console.log('Error');
    case actionTypes.DISPLAY:
      return {
        ...state,
        initialList: action.initialList
      };
  }

  return state;
};

export default reducer;
