const jwt = require("jsonwebtoken");
const refreshTokenResponse = require("../Responses/refreshTokenResponse");
const connect = require('../connection');
const logger = require("../logger");

//For verifying the token
const verifyToken = (token, data, client) => {
  
        //Verifying the token with the secret key

        jwt.verify(token, process.env.SECRET_KEY, (err,payload) => {
          if (err) {
            logger.error(`${refreshTokenResponse.notAuthorizedCode} ${refreshTokenResponse.notAuthorizedMessage}`)
            client.send(
              `status: ${refreshTokenResponse.notAuthorizedCode} message:${refreshTokenResponse.notAuthorizedMessage}`
            );
            client.close()
          }
          else{

            logger.info('200 token verified')
            client.send('token verified')
            connect(data,client)
          }

        });
     
};

module.exports = verifyToken;
