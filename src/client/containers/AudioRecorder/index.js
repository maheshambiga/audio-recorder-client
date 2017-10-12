import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AudioRecorder from './../../components/AudioRecorder';
import * as actions from './actions';

const mapStateToProps = state => {

  return {
    ...state.addStory
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecorder);