import React from 'react';
import { TabBar } from 'antd-mobile';
import '../index.css'
import RobOrder from '../containers/RobOrderContainer'
import ParkingWorkList from '../containers/ParkingWorkListContainer'
import SelectParkingLots from '../containers/SelectParkingLotsContainer';

import createHistory from 'history/createBrowserHistory'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }

  chagePage=(path)=>{
    console.log(path)
    console.log(this.props)
    // const history = createHistory()
    this.props.history.push(path)
    // history.push(path);
  }

  // renderContent1(pageText) {

  //   return (
  //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
  //      <RobOrder />
  //     </div>
  //   );
  
  // }

  // renderContent2(pageText) {
  //   return (
  //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
  //      <ParkingWorkList/>
  //     </div>
  //   );
  // }

  // renderContent3(pageText) {
  //   return (
  //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
  //      <SelectParkingLots />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '10%', width: '100%', bottom: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="抢单"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://okc9ihakz.bkt.clouddn.com/order.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://okc9ihakz.bkt.clouddn.com/order-click.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={localStorage.getItem("status") === '1'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              localStorage.setItem("status","1")
              this.chagePage("/home/RobOrder");
            }}
            data-seed="logId"
          >
            {/* {this.renderContent1('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://okc9ihakz.bkt.clouddn.com/%E8%BD%A6%E8%BE%86-01.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://okc9ihakz.bkt.clouddn.com/worklist-click.svg) center center /  21px 21px no-repeat' }
              }
              />
            }
            title="停取"
            key="Koubei"
            // badge={'new'}
            selected={localStorage.getItem("status") === '2'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              localStorage.setItem("status","2")
              this.chagePage("/home/ParkingWorkList");
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent2('Koubei')} */}
          </TabBar.Item>
           <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://www.iconpng.com/png/iphone_web_black/backup.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://www.iconpng.com/png/iphone_web_black/backup.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="历史记录"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* {this.renderContent3('Friend')} */}
          </TabBar.Item>
          {/* <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent1('My')}
          </TabBar.Item>  */}
        </TabBar>
      </div>
    );
  }
}

//ReactDOM.render(<TabBarExample />, mountNode);