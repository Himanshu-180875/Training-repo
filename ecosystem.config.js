module.exports = {
  apps: [{
    name: "crypto",
    cwd:"./packages/cryptography/app",
    script: "index.js",

    env: {
      NODE_ENV: "jwt"
   },
   
   env_session: {
      NODE_ENV: "session"
   }
  },{
    name: "websocket",
    cwd:"./packages/websocket",
    script:"index.js"
  },{
    name:"react-app",
    cwd:"./packages/react-app-training",
    script:"npm run start"
  }]
}
