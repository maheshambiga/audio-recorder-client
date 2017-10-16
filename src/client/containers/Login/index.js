import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComp from './../../components/Login';
import * as actions from './actions';

const mapStateToProps = state => {

  return {
    ...state.loginUser,
    authInfo: state.authInfo
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginComp);