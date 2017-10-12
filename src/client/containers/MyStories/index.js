import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyStories from './../../components/MyStories';
import * as action from './actions';

const mapStateToProps = state => {

  return {
    ...state.myStories
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...action
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyStories);