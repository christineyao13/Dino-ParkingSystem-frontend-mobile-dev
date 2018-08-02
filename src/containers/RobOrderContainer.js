import {connect} from 'react-redux';
import RobOrder from "../components/RobOrder";
import RobOrderAPI from '../API/RobOrderAPI'

const mapStateToProps = (state, ownProps) => {
  let lotsList = [1,2];
//   if (state !== null) {
//     lotsList = [...state.dashboard];
//   }

  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RobOrder);