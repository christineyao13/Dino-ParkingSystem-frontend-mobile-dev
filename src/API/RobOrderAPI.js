import axios from "axios";

const RobOrderAPI = {
  initServerData(dispatch, action) {
    this.getServerData(dispatch, action);
  },
  getServerData(successCallBack) {
    // let testData = [
    //   {
    //     img: 'http://www.iconpng.com/png/delivering-icons/car171.png',
    //     // title: '车牌号：粤C888888',
    //     des: '车牌号'
    //   }
    // ];
    // successCallBack(testData)},
    let getDataUrl = 'https://dino-parking-system-backend.herokuapp.com/orders/nohandle';
    axios
      .get(getDataUrl)
      .then((response) => {
        const data = response
          .data
          .map(serverData => {
            const img = 'http://www.iconpng.com/png/delivering-icons/car171.png';
            const {plateNumber} = serverData;
            
            return {plateNumber,img};
          })
          ;
        successCallBack([...data])
      })
      .catch(function (error) {
      })
      .then(function () {});
  },
  sendServerData(successCallBack) {
    alert("rob order successfully!");
    this.getServerData(successCallBack)
    // let testData = [
    //   {
    //     img: 'http://www.iconpng.com/png/delivering-icons/car171.png',
    //     // title: '车牌号：粤C888888',
    //     des: '车牌号'
    //   }
    // ];
    // successCallBack(testData)}

    // axios.
    // post(`${this.apiUrl}/users`, employee)
    // .then(function (response) {
    //     successCallBack(response.status);
    // }) 
    // .catch(function (error) {
    //     console.log(error);
    // })
  }

}

export default RobOrderAPI;