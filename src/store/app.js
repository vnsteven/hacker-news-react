import * as actionTypes from './actionTypes';
import axios from '../containers/axios-hn';

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
