import {connect} from 'react-redux';
import SelectParkingLots from "../components/SelectParkingLots";
import ParkingLotDashboardAPI from '../API/ParkingLotDashboardAPI'

const mapStateToProps = (state, ownProps) => {
  let lotsList = [];
  

  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SelectParkingLotsHandler: (parkingBoyId,parkingLotId) => {
      ParkingLotDashboardAPI.putServerData(parkingBoyId,parkingLotId);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectParkingLots);