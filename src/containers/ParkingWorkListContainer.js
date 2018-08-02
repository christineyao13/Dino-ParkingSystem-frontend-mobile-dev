import {connect} from 'react-redux';
import ParkingWorkList from "../components/ParkingWorkList";
import ParkingWorkListAPI from '../API/ParkingWorkListAPI'

const mapStateToProps = (state, ownProps) => {
  let lotsList = [
    {
      img: 'http://www.iconpng.com/png/delivering-icons/car171.png',
      // title: '车牌号：粤C888888',
      des: '车牌号'
    }
  ];
//   if (state !== null) {
//     lotsList = [...state.dashboard];
//   }
   // let lotsList = state;
    console.log(lotsList)
  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getParkingLotsHandler: () => {
        ParkingWorkListAPI.getServerData(parkingLots => dispatch({type:'GET_ALL_PARKINGLOTS',parkingLots}))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingWorkList);