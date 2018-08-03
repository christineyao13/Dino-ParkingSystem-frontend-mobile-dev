import React from 'react';
import { List,Button} from 'antd-mobile';
const Item = List.Item;
export default class SelectParkingLots extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getParkingLotsHandler();
    }
      
  render(){
      console.log(this.props.lotsList) 
      // const parkingBoyId = localStorage.getItem("id");
      let parkingLotId = 0;
      return(
          <div>
        <div
        style={{
        backgroundColor: "#1a81d2",
        height: 50,
        fontSize: 20,
        verticalAlign: "middle"
      }}>停车地点</div>
        <List renderHeader={() => ' '} className="my-list">
        
        <Item>
          <select defaultValue="0" onChange={(e)=>parkingLotId = e.target.value}>
            <option value="0">选择停车场</option>
            <option value="1">选择停车场</option>
            <option value="2">选择停车场</option>
            {this.props.lotsList.map(item=>
            <option value={item.id}>{item.name}(剩余容量：{item.size-item.carNum})</option>
            )}
          </select>
        </Item>
      </List>

      <Button style={{marginTop:300,backgroundColor:"#1a81d2"}} onClick={()=>this.props.SelectParkingLotsHandler(parkingLotId)}>完成订单</Button>
      </div>
      )
  }
}

