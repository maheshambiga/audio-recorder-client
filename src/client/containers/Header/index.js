import { connect } from 'react-redux';

import Header from './../../components/Header';


const mapStateToProps = state => {

  return {
    authInfo: state.authInfo

  };
};


export default connect(mapStateToProps)(Header);