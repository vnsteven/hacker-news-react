import * as actionTypes from './actionTypes';
import axios from '../../containers/axios-hn';

export const displayItems = () => {
  return {
    type: actionTypes.DISPLAY_ITEMS
  };
};

export const favoriteItems = (item) => {
  return {
    type: actionTypes.FAVORITE_ITEMS,
    favItem: item
  };
};

export const randomItem = () => {
  return {
    type: actionTypes.RANDOM_ITEM
  };
};

export const matchItems = (event) => {
  return {
    type: actionTypes.MATCH_ITEMS,
    userInput: event.target.value
  };
};

export const sortItems = (event) => {
  return {
    type: actionTypes.SORT_ITEMS,
    userInput: event.target.value
  };
};

export const setData = (data) => {
  return {
    type: actionTypes.FETCH_DATA,
    data: data
  };
};

export const fetchDataFailed = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILED,
    error: error
  };
};

export const initData = () => async (dispatch) => {
  try {
    const response = await axios.get('topstories.json');
    if (!response) {
      throw new Error('Error');
    }
    const data = await response.data;
    const promises = data
      .slice(0, 10)
      .map((id) =>
        axios.get(`item/${id}.json`).then((response) => response.data)
      );
    const result = await Promise.all(promises);

    dispatch(setData(result));
  } catch (err) {
    dispatch(fetchDataFailed(err));
  }
};

export const fetchComments = (comments) => {
  return {
    type: actionTypes.FETCH_COMMENTS,
    comments: comments
  };
};

export const initComments = (kids) => async (dispatch) => {
  try {
    const promises = kids.map((kid) =>
      axios.get(`item/${kid}.json`).then((response) => response.data)
    );
    const result = await Promise.all(promises);
    dispatch(fetchComments(result));
  } catch (err) {
    dispatch(fetchDataFailed(err));
  }
};

export const fetchPage = (data) => {
  return {
    type: actionTypes.FETCH_PAGE,
    data: data
  };
};

export const initPage = (num) => async (dispatch) => {
  try {
    const response = await axios.get('topstories.json');
    const data = await response.data;
    const promises = data
      .slice(parseInt(`${num - 1}0`), parseInt(`${num}0`))
      .map((id) =>
        axios.get(`item/${id}.json`).then((response) => response.data)
      );

    const result = await Promise.all(promises);
    dispatch(fetchPage(result));
  } catch (err) {
    dispatch(fetchDataFailed(err));
  }
};
