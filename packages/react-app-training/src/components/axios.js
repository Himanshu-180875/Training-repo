
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
// instance.interceptors.request.use(
//     (config) => {
//     config.withCredentials = true

    
//     return config;
//     },
//     (err) => {
//     Promise.reject(err);
//     },
//     ); 

export default instance;