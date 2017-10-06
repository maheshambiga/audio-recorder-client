import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SocialSingup from './../../components/SocialSingup';
import {setAuthInfo} from './../App/actions';

const mapStateToProps = state => {

  return {

  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAuthInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SocialSingup);