import {connect} from 'react-redux';
import HistoryOrder from "../components/HistoryOrder";
import HistoryOrderAPI from '../API/HistoryOrderAPI'

const mapStateToProps = (state, ownProps) => {
    let lotsList = state;
  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHistoryOrderHandler: () => {
        HistoryOrderAPI.getServerData(historyOrder => dispatch({type:'GET_ALL_HISTORYORDER',historyOrder}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryOrder);