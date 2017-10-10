import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AudioRecorder from './../../components/AudioRecorder';


const mapStateToProps = state => {

  return {
    ...state.loginUser
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecorder);