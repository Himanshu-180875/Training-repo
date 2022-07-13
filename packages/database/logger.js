const log4js = require("log4js");

//configuring the logger for console and file 
log4js.configure({
  appenders: {
    app: { type: "file", filename: "app.log" },
    console: { type: "stdout" },
    
  },
  categories: { default: { appenders: ["app", "console"], level: "debug" }, },
});

const logger = log4js.getLogger();
//exporting the logger for other use
module.exports = logger;
