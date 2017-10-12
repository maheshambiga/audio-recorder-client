import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ViewStory from './../../components/ViewStory';
import * as action from './actions';

const mapStateToProps = (state, ownProps) => {

  return {
    ...state.viewStory,

  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...action
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewStory);