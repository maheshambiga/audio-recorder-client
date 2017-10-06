import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SocialSingup from './../../components/SocialSingup';
import * as actions from './actions';

const mapStateToProps = state => {

  return {

  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SocialSingup);