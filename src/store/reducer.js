import * as actionTypes from './actions';

const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.DELETE) {
    console.log(action.itemId, action.list);
    const initialList = [...action.list];
    const element = initialList.filter((el) => el.id !== action.itemId);
    console.log(element);
    return {
      list: element
    };
  }

  return state;
};

export default reducer;
