// const db = require('../config/database')
const db = require("database");
const logger = require("../config/logger")

  
const savingRequestLogs = async(id, request_email, request_url, request_method) => {
    db.query("Insert into request_logs set ?", {id, request_email, request_url, request_method},(err)=>{
        if(err){
        // console.log(err);
        logger.error(err)
}
    })
}
const savingResponseLogs = async(id, response_status, response_message) => {
    db.query("Insert into response_logs set ?", {id,response_status, response_message},(err)=>{
        if(err){
        // console.log(err);
        logger.error(err)

        }
    })
}  

module.exports = {savingRequestLogs,
    savingResponseLogs
};