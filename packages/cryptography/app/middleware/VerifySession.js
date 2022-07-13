const refreshTokenResponse  = require('../Responses/refreshTokenResponse');
const {savingRequestLogs,savingResponseLogs} = require('../controllers/savingLogs');

const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
const VerifySession = (req, res,next)=> {
    var id = uuidv4()
    var email = req.session.userInfo?req.session.userInfo[1]:''
   

    if(!req.session.userInfo){
        savingRequestLogs(id,email,req.url, req.method)
        savingResponseLogs(id,refreshTokenResponse.notAuthorizedCode, refreshTokenResponse.notAuthorizedMessage)
        return res.status(refreshTokenResponse.notAuthorizedCode).send({
            message: refreshTokenResponse.notAuthorizedMessage
        })

    }
    // console.log(req.session.userInfo)
    req.id = req.session.userInfo[0]
    req.email = req.session.userInfo[1]
    next()
}

module.exports = VerifySession;