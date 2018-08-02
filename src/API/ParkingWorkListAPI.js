import axios from "axios";

const ParkingWorkListAPI = {
//   initServerData(dispatch, action) {
//     this.getServerData(dispatch, action);
//   },
  getServerData(successCallBack) {
    let getDataUrl = 'https://dino-parking-system-backend.herokuapp.com/orders/nohandle';
    axios
      .get(getDataUrl)
      .then((response) => {
        const data = response
          .data
          .map(serverData => {
            const img = 'http://www.iconpng.com/png/delivering-icons/car171.png';
            const {plateNumber,id} = serverData;
            
            return {plateNumber,img,id};
          })
          ;
        successCallBack([...data])
      })
      .catch(function (error) {
      })
      .then(function () {});
  },

  sendServerData(id,successCallBack) {
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 1;
    axios.
    post(`https://dino-parking-system-backend.herokuapp.com/order/${id}`, parkingBoyId)
    .then(function (response) {
        console.log('success');
        alert("rob order successfully!")
        successCallBack(response.status);
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default ParkingWorkListAPI;