import axios from "axios";
import createHistory from 'history/createBrowserHistory';

const RobOrderAPI = {
  
  sendServerData(id,successCallBack) {
    let self = this;
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 2;
    console.log(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`)
    axios.
    put(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`, {"parkingBoyId":2,"status":"finish"})
    .then(function (response) {
        console.log('success');
        alert("unpark car successfully!")
        localStorage.setItem("status","2")
        const history = createHistory();
        history.go(-1)
        // window.location.href="/home/ParkingWorkList"
        // history = "/home/ParkingWorkList"
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default RobOrderAPI;