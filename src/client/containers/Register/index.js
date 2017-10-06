import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterUser from './../../components/Register';
import * as actions from './actions';

const mapStateToProps = state => {

  return {
    ...state.registerUser
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);