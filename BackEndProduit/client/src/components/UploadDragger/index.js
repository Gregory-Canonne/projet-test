import React from 'react';
import 'src/components/UploadDragger/uploaddragger.sass';

const UploadDragger = ({ handleUpload, handleChange }) => {
  return (
    <form
      className="uploadSubmit"
      encType="multipart/form-data"
    >
      <input type="file" defaultValue="" onChange={handleChange} />
      <input type="submit" onClick={handleUpload} value="Soumettre" />
    </form>
  );
};

export default UploadDragger;
