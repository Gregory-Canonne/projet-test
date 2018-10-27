/*-----------------------------------------------------
-> Import store
-----------------------------------------------------*/
import initialState from 'src/redux/initialState';

/*-----------------------------------------------------
-> Import Actions
-----------------------------------------------------*/
import { GET_FORM_VALUE, INSERT_FORM_VALUE } from '../actions';
/*-----------------------------------------------------
-> Others
-----------------------------------------------------*/

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INSERT_FORM_VALUE: {
      const { file, name, typeFile } = action;
      return {
        ...state,
        files: {
          file,
          name,
          typeFile,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
