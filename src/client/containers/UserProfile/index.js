import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserProfile from './../../components/UserProfile';
import * as actions from './actions';

const mapStateToProps = state => {

  return {
    userProfile: state.userProfile,
    authInfo: state.authInfo
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);