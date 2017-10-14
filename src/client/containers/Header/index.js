import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../../components/Header';
import {toggleMenu} from './../BurgerMenu/actions';

const mapStateToProps = state => {

  return {
    authInfo: state.authInfo,
    menuState: state.menuState
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMenu
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);