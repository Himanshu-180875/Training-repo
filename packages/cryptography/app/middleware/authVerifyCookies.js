const jwt = require("jsonwebtoken")
const {savingRequestLogs,savingResponseLogs} = require('../controllers/savingLogs');
const refreshTokenResponse = require('../Responses/refreshTokenResponse');

const Authenticate  = (req,res,next) => {
    
        const token = req.cookies.jwToken;
        jwt.verify(token, process.env.SECRET_KEY, (err,payload)=>{
            if(err){
                savingRequestLogs(id,payload?payload.email:'', req.url, req.method)
                savingResponseLogs(id,refreshTokenResponse.notAuthorizedCode, refreshTokenResponse.notAuthorizedMessage)
                res.status(refreshTokenResponse.notAuthorizedCode).send({
                    message:refreshTokenResponse.notAuthorizedMessage
                })
            }
            console.log('verified')
            req.email = payload.email
            req.id =payload.id
        })
        next()


}
module.exports = Authenticate