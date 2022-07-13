const express = require("express");
const router = express.Router();
const VerifySession = require("../middleware/VerifySession");
// const authVerify = require("../middleware/authVerify");
const authVerify = require("../middleware/authVerifyCookies");
const crudOperations = require("../controllers/crudOperations");

if (process.env.NODE_ENV == "session") {
  router.use(VerifySession);
} else {
  router.use(authVerify);
}

// WE can also pass middleware as second argument of the function
//First these routes will check the authenticity, then the length of the password and then
//it will perform the operation

router.post("/create", crudOperations.encrypt);
router.get("/all", crudOperations.getAllData);
router.post("/view", crudOperations.decrypt);
router.get("/", crudOperations.getDataOfUserById);

module.exports = router;
