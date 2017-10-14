import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BurgerMenu from '../../components/BurgerMenu';
import * as burgerMenuActions from './../BurgerMenu/actions';

const mapStateToProps = state => {

  return {
    ...state.menuState
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...burgerMenuActions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);