import { connect } from 'react-redux';
import UploadDragger from 'src/components/UploadDragger';
import { getFormValue, sendFile } from 'src/redux/actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  handleUpload: (e) => {
    e.preventDefault();
    dispatch(sendFile());
  },
  handleChange: (e) => {
    dispatch(getFormValue(e.currentTarget.files[0]));
  },
});

export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps, // écriture
)(UploadDragger);
