import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BurgerMenu from '../../components/BurgerMenu';
import * as burgerMenuActions from './../BurgerMenu/actions';
import {logoutUser} from './../Login/actions';
const mapStateToProps = state => {

  return {
    authInfo: state.authInfo,
    menuState: state.menuState
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...burgerMenuActions, logoutUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);