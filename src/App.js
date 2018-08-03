import React, { Component } from 'react';
//import { Button, Icon } from 'antd-mobile';
import styles from './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RobOrder from './containers/RobOrderContainer'
import ParkingWorkList from './containers/ParkingWorkListContainer'
import SelectParkingLots from './containers/SelectParkingLotsContainer';
import ConfirmUnpark from './containers/ConfirmUnparkContainer'
import Test from './components/Test'
import LoginForm from './components/Login'
class App extends Component {
  render() {
    const {...props} = this.props
  
    return (
      <div className={styles.App}>
          <div>
            <Route exact path="/home/RobOrder" component={RobOrder}></Route>
            <Route  path="/home/ParkingWorkList" component={ParkingWorkList}></Route>
            <Route  path="/home/SelectParkingLots" component={SelectParkingLots}></Route>
            <Route  path="/home/ConfirmUnpark" component={ConfirmUnpark}></Route>
            
            <Home {...props}/>
            {/* <LoginForm /> */}
          </div>
      </div>
    );
  }
}

export default App;
