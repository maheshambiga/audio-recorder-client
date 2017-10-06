import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './../../components/Dashboard';


const mapStateToProps = state => {

  return {
    ...state.loginUser
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);