const axios = require("axios");
const crypto = require('crypto');

//Generating the token
const generateToken = async() => {

    let apiPublicKey = process.env.apiPublicKey
    let apiPrivateKey = process.env.apiPrivateKey

    const baseDomain = "https://api.kraken.com";
    const privatePath = "/0/private/";
    const endPointName = "GetWebSocketsToken"
        
        //combining the whole url
        const apiEndpointFullURL = baseDomain + privatePath + endPointName;

        //getting the date and using it for nonce
        const nonce = Date.now().toString();
        const apiPostBodyData = "nonce=" + nonce;
       
        
        const apiPost = nonce + apiPostBodyData;

        //for getting the buffer of private key
        const secret = Buffer.from(apiPrivateKey, 'base64');
        

        const sha256 = crypto.createHash('sha256');
        const hash256 = sha256.update(apiPost).digest('binary');
        

        // used to create an Hmac object that uses the stated ‘algorithm’ and ‘key’.
        const hmac512 = crypto.createHmac('sha512', secret);
        const signature = hmac512.update(privatePath + endPointName + hash256, 'binary').digest('base64');
        
        
        const httpOptions =
        {
            headers: { 'API-Key': apiPublicKey, 'API-Sign': signature }
        };


        // doing the post request for getting the token and adding the headers 
        let jsonData = await axios.post(apiEndpointFullURL, apiPostBodyData, httpOptions);
        return jsonData.data.result.token;

}

 

module.exports = generateToken;