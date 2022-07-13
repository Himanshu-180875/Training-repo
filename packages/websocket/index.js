const WebSocketServer = require("ws");
const connect = require("./connection");
const log4js = require("log4js");
const logger = require("./logger");
const dotenv = require("dotenv").config();
const path = require("path");
const authenticateUser = require("./controllers/auth");
const verifyToken = require("./controllers/authVerify");

// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: process.env.WEBSOCKET_APP_PORT });

// Creating connection using websocket
wss.on("connection", (ws, req) => {
  logger.info("new client connected" + " " + path.basename(__filename));
  // sending message
  ws.on("message", (data) => {
    const string = data.toString("utf8");
    var object = JSON.parse(string);

    //code for login user 
    if ((object?.email && object?.password)) {
      var { email, password } = object;
      authenticateUser(email, password, ws);
    }

    //if the user is logged in and wants to see protected data
    else if( object?.token && object?.data){
        var {token,data} = object

        //Verifying the token of the user if the user wants to see protected data
        if(data.includes('BTC/USD','ETH/USD')){
         verifyToken(token, data, ws);

        }

        //if the token has expired and the data is not protected 
        else{
            connect(data, ws)
        }
    }

    //if the user wants to see any data 
    else if(object?.data){
        var {data} = object;
        //if the data is protected then user needs to login
        if(data.includes("BTC/USD",'ETH/USD')){
            ws.send("You need to login to view this data")
           }
           else{
               connect(data, ws)
           }

    }
  });
  // handling what to do when clients disconnects from server
  ws.on("close", () => {
    logger.warn(
      "the client has disconnected" + " " + path.basename(__filename)
    );
    ws.close();
  });
  // handling client connection error
  ws.onerror = function () {
    logger.error("Some Error occurred" + " " + path.basename(__filename));
  };
  function closeConnection(){
    ws.send('connection closed')
    ws.close()
  }
  setTimeout(closeConnection, 60000)
});



//This gives info in the console about server running status
logger.info(
  `The WebSocket server is running on port ${process.env.WEBSOCKET_APP_PORT}` +
    " " +
    path.basename(__filename)
);
module.exports = wss;
