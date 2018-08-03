import {Button} from 'antd-mobile';
import React from 'react';

export default class ParkingWorkList extends React.Component {

  componentDidMount() {
        this.props.getParkingLotsHandler();
  }

  chagePage=(orderId)=>{
    console.log(orderId)
    localStorage.setItem("orderId",orderId)  
    this.props.history.push('/home/SelectParkingLots')
  }

  render(){
    //const data = this.props.lotsList
    console.log(this.props.lotsList)
    return(
      <div>
        <div
          style={{
          backgroundColor: "#1a81d2",
          height: 50,
          fontSize: 20,
          verticalAlign: "middle"
        }}>停取工作列表</div>

        {this.props.lotsList.map(data=>(
          <div style={{border:'4px solid #9e969633'}}>
          <div
              style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px 0',
            }}>
              <img
                style={{
                height: '64px',
                marginRight: '15px'
              }}
                src={data.img}
                alt=""/>
              <div style={{
                lineHeight: 1
              }}>
                <div style={{marginBottom: '8px', fontWeight: 'bold'}}>{data.plateNumber}</div>
                <div>停车时间:{data.parkDate}<span
                  style={{
            fontSize: '30px',
            color: '#FF6E27'
          }}></span>
          
                </div>
                
                </div>
                
              </div>
              <Button onClick={()=>this.chagePage(data.id)}>选择停车场</Button>
          </div>
        ))}
      </div>
    );
  }
}
