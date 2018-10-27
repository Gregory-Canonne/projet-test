/*-----------------------------------------------------
-> Import Librairies
-----------------------------------------------------*/
import React from 'react';
import PropTypes from 'prop-types';
/*-----------------------------------------------------
-> Import Components
-----------------------------------------------------*/
import UploadDragger from 'src/containers/UploadDragger';
/*-----------------------------------------------------
-> Others
-----------------------------------------------------*/
const App = () => (
  <React.Fragment>
    <UploadDragger />
  </React.Fragment>
);

/*-----------------------------------------------------
-> PropType
-----------------------------------------------------*/
App.propTypes = {
};
/*-----------------------------------------------------
-> Exports
-----------------------------------------------------*/
export default App;
