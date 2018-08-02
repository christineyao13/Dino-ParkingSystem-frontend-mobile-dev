import axios from "axios";

const RobOrderAPI = {
  initServerData(dispatch, action) {
    this.getServerData(dispatch, action);
  },
  getServerData(successCallBack) {
    let testData = [
      {
        img: 'http://www.iconpng.com/png/delivering-icons/car171.png',
        // title: '车牌号：粤C888888',
        des: '车牌号'
      }
    ];
    successCallBack(testData)}
  //   let getDataUrl = 'https://dino-parking-system-backend.herokuapp.com/parkingLots/dashboard';
  //   axios
  //     .get(getDataUrl)
  //     .then((response) => {
  //       // const data = response
  //       //   .data
  //       //   .map(serverData => {
  //       //     const {parkingLotName, size, carNum, parkingBoyName} = serverData;
  //       //     return {parkingLotName, size, carNum, parkingBoyName};
  //       //   });
  //       successCallBack(response.data)
  //     })
  //     .catch(function (error) {
  //     })
  //     .then(function () {});
  // }
}

export default RobOrderAPI;