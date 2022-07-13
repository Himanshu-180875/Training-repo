var token;
const WebSocket = require("ws");
const logger = require("./logger");
const generateToken = require("./token");
const client = require('./index');
const path = require('path')


// -----Calling function for getting the token for authenticated routes
// generateToken().then((result) => {
//   token = result;
// });


//---Connect function for making the connection with kraken websockets server
var connect = function (coinsArray, client) {
  const ws = new WebSocket(
    "wss://ws.kraken.com"
  );


  //---- for opening the connection 
  ws.onopen = function (e) {
    logger.info("[open] Connection established with Kraken" + " "  + path.basename(__filename));
    //This is used to send the data to kraken server for getting the user specific data
    ws.send(
      JSON.stringify({
        event: "subscribe",
        pair: coinsArray,

        subscription: {
          name: "ticker",
        },
      })
    );
  };


//---for giving the message from server to client
  ws.onmessage = function (event) {
    //As event.data is string So I am converting it into object 
    var newData = JSON.parse(event.data)
    //Here I am checking the event status and based on that I am giving Logs
    if(newData?.event == 'heartbeat'){
      logger.debug(`[message] Data received from server: ${event.data}` + " "  + path.basename(__filename));
      }
    else{
      logger.info(`[message] Data received from server: ${event.data}` + " "  + path.basename(__filename));

    }
    
    //Here I am passing the data to the client


    client.send(event.data)


  };

// -- for any type of error
  ws.onerror = function (error) {
    logger.error(`[error] ${error.message}` + " "  + path.basename(__filename));
  };
};

module.exports = connect;
