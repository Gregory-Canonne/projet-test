import { GET_FORM_VALUE, SEND_FILE, insertFormValue } from 'src/redux/actions';
import axios from 'axios';

const request = store => next => (action) => {
  switch (action.type) {
    case GET_FORM_VALUE: {
      const { name, type } = action.file;
      const reader = new FileReader();
      reader.readAsDataURL(action.file);
      reader.onloadend = () => {
        store.dispatch(insertFormValue(reader.result, name, type));
      };
      break;
    }
    case SEND_FILE: {
      const file = store.getState().files;
      axios.post('http://localhost:5000/upload', { file })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(JSON.parse(JSON.stringify(error)).response.data.error);
        });
      break;
    }
    default:
  }
  next(action);
};

export default request;
