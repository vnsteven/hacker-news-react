import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  list: [],
  initialList: [],
  favoriteList: [],
  commentList: [],
  count: 0,
  favoriteCount: 0
};

const matchItems = (state, action) => {
  const list = [...state.initialList];
  const newList = list.filter((item) => {
    return item.title.toLowerCase().includes(action.userInput.toLowerCase());
  });
  return updateObject(state, {
    list: newList,
    count: newList.length
  });
};

const fetchData = (state, action) => {
  return updateObject(state, {
    list: action.data,
    initialList: action.data,
    count: action.data.length
  });
};

const fetchComments = (state, action) => {
  return updateObject(state, {
    commentList: action.comments,
    count: action.comments.length
  });
};

const sortItems = (state, action) => {
  const list = [...state.list];
  const favoriteList = [...state.favoriteList];
  const sortBy = action.userInput;
  let sortedList = null;

  switch (sortBy) {
    default:
    case 'Title':
      sortedList = list.sort((a, b) => (a.title > b.title ? 1 : -1));
      return updateObject(state, {
        list: sortedList,
        count: sortedList.length
      });
    case 'Popularity':
      sortedList = list.sort((a, b) => (a.score > b.score ? -1 : 1));
      return updateObject(state, {
        list: sortedList,
        count: sortedList.length
      });
    case 'Unpopularity':
      sortedList = list.sort((a, b) => (a.score > b.score ? 1 : -1));
      return updateObject(state, {
        list: sortedList,
        count: sortedList.length
      });
    case 'All':
      return updateObject(state, {
        list: state.initialList,
        count: state.initialList.length
      });
    case 'Favorites':
      return updateObject(state, {
        list: favoriteList,
        count: favoriteList.length
      });
  }
};

const randomItem = (state, action) => {
  const list = [...state.initialList];
  const randomNumber = Math.floor(Math.random() * (list.length - 1));
  return updateObject(state, {
    list: [list[randomNumber]],
    count: 1
  });
};

const favoriteItems = (state, action) => {
  const element = state.list.find((el) => el.id === action.favItem);
  const favorites = [...state.favoriteList];

  if (!favorites.includes(element)) {
    return updateObject(state, {
      favoriteList: [element, ...favorites],
      favoriteCount: favorites.length + 1
    });
  } else {
    favorites.splice(favorites.indexOf(element), 1);
    return updateObject(state, {
      favoriteList: favorites,
      favoriteCount: favorites.length
    });
  }
};

const displayItems = (state, action) => {
  return updateObject(state, {
    list: [...state.initialList],
    count: state.initialList.length
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_ITEMS:
      return displayItems(state, action);
    case actionTypes.FAVORITE_ITEMS:
      return favoriteItems(state, action);
    case actionTypes.RANDOM_ITEM:
      return randomItem(state, action);
    case actionTypes.SORT_ITEMS:
      return sortItems(state, action);
    case actionTypes.MATCH_ITEMS:
      return matchItems(state, action);
    case actionTypes.FETCH_DATA:
    case actionTypes.FETCH_PAGE:
      return fetchData(state, action);
    case actionTypes.FETCH_COMMENTS:
      return fetchComments(state, action);
    default:
      return state;
  }
};

export default reducer;
