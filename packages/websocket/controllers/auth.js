const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const db = require("../config/database");
const db = require('database')
const logger = require("../logger");
const loginResponses = require("../Responses/loginResponses");
var cookie_parser = require("cookie");

const login = (email, password, client) => {
  //Checking whether the user with the passed email exists or not
  db.query(
    "Select * from user where LOWER(email) = ?",
    [email],
    (err, result) => {
      if (err) {
        logger.error(`${loginResponses.badRequestCode} , ${err}`);
        return client.send(
          `status: ${loginResponses.badRequestCode}, message: ${err}`
        );
      }
      if (!result.length) {
        //   savingRequestLogs(id, req.body.email, req.url, req.method)
        //   savingResponseLogs(id,loginResponses.badRequestCode, loginResponses.badRequestMessage)
        logger.info(
          `${loginResponses.badRequestCode}, ${loginResponses.badRequestMessage}, ${email}`
        );
        return client.send(
          `status: ${loginResponses.badRequestCode} , message: ${loginResponses.badRequestMessage}`
        );
      }

      //Comparing the password entered by the user and stored password.
      bcrypt.compare(password, result[0]["password"], (Berr, Bresult) => {
        if (Berr) {
          throw Berr;
          // return res.status(400).send({
          //   message: "Password is incorrect",
          // });
        }

        //If both the passwords are correct then assigning the token.
        if (Bresult) {
          const token = jwt.sign(
            { email: result[0].email, id: result[0].id },
            process.env.SECRET_KEY,
            { expiresIn: "1m" }
          );
          const refresh_token = jwt.sign(
            { email: result[0].email, id: result[0].id },
            process.env.REFRESH_SECRET_KEY,
            { expiresIn: "30d" }
          );
          //   savingRequestLogs(id, req.body.email, req.url, req.method)
          //   savingResponseLogs(id, loginResponses.successResponse, loginResponses.successMessage)

          logger.info(
            `${loginResponses.successResponse}, ${loginResponses.successMessage}, ${email} `
          );
          return client.send(
            `status: ${loginResponses.successResponse} message: ${loginResponses.successMessage}, token: ${token}, refreshToken: ${refresh_token}  `
          );
        }
        //   savingRequestLogs(id, req.body.email, req.url, req.method)
        //   savingResponseLogs(id, loginResponses.failedResponse, loginResponses.failedMessage)
        logger.info(
          `${loginResponses.failedResponse}, ${loginResponses.failedMessage}, ${email} `
        );

        return client.send(
          `status: ${loginResponses.failedResponse} message: ${loginResponses.failedMessage}`
        );
      });
    }
  );
};

module.exports = login;
