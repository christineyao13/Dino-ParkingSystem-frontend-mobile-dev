import React from 'react';
import { List,Button} from 'antd-mobile';
const Item = List.Item;
export default class SelectParkingLots extends React.Component{
    constructor() {
        super();
      }
    
    //   componentWillMount() {
    //     this
    //       .props
    //       .load();
    //   }
  render(){
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
          <select defaultValue="1">
            <option value="1">选择停车场</option>
            <option value="2" >停车场A(剩余容量：1)</option>
            <option value="2" >停车场B</option>
            <option value="2" >停车场C</option>
            {/* {this.props.lotsList.map(item=>
            <option value={item.parkingLotName}>{item.parkingLotName}(剩余容量：{item.size-item.carNum})</option>
            )} */}
          </select>
        </Item>
      </List>

      <Button style={{marginTop:300,backgroundColor:"#1a81d2"}}>完成订单</Button>
      </div>
      )
  }
}

