import {connect} from 'react-redux';
import Order from "../components/Order";
import RobOrderAPI from '../api/RobOrderAPI'

const mapStateToProps = (state, ownProps) => {
  let lotsList = [];
  if (state !== null) {
    lotsList = [...state.dashboard];
  }

  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      ParkingLotDashboardAPI.initServerData(dispatch, showParkingLotsList);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);