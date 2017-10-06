import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setRedirectUrl} from './../App/actions';

import EnsureLoggedIn from './../../components/EnsureLoggedIn';

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.authInfo.isLoggedIn,
    currentURL: ownProps.location.pathname
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setRedirectUrl
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);