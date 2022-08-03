import axios from "axios";

//created the custom axios so that we don't need to pass headers with all the requests
const instance = axios.create({
    baseURL:  "http://localhost:5001/api",
    headers: {
    "Content-Type": "application/json",
    Accept:"application/json"
    }, 
    withCredentials: true 

})  ;
export default instance;