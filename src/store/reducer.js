import * as actionTypes from './actions';

const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.DISPLAY_ALL:
      return {
        ...state,
        list: [
          {
            by: 'dublin',
            descendants: 157,
            id: 20676904,
            score: 248,
            time: 1565627007,
            title: 'NULL license plate not such a bright idea',
            type: 'story',
            url:
              'https://knrs.iheart.com/content/2019-08-12-clever-vanity-license-plate-backfires-on-man-winds-up-with-tons-of-tickets/'
          }
        ]
      };
  }
  return state;
};

export default reducer;
