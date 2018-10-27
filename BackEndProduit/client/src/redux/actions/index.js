export const GET_FORM_VALUE = 'action/Form/GET_FORM_VALUE';
export const INSERT_FORM_VALUE = 'action/Form/INSERT_FORM_VALUE';
export const SEND_FILE = 'action/Form/SEND_FILE';

export const getFormValue = file => ({
  type: GET_FORM_VALUE,
  file,
});

export const insertFormValue = (file, name, typeFile) => ({
  type: INSERT_FORM_VALUE,
  file,
  name,
  typeFile,
});

export const sendFile = () => ({
  type: SEND_FILE,
});
