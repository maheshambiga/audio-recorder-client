import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppComp from '../../components/App';
import {setAuthInfo,setRedirectUrl} from './actions';
import {setActivePage} from './../BurgerMenu/actions';

const mapStateToProps = state => {

  return {
    ...state.authInfo
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAuthInfo, setActivePage, setRedirectUrl
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppComp);