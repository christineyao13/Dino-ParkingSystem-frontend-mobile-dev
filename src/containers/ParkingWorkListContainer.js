import {connect} from 'react-redux';
import ParkingWorkList from "../components/ParkingWorkList";
import ParkingWorkListAPI from '../API/ParkingWorkListAPI'

const mapStateToProps = (state, ownProps) => {
    console.log(lotsList)
    let lotsList = state;
  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getParkingLotsHandler: () => {
        ParkingWorkListAPI.getServerData(parkingLots => dispatch({type:'GET_ALL_PARKINGLOTS',parkingLots}))
    },
    aa :() =>{
      console.log(1)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingWorkList);