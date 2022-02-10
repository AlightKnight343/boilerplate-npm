const {basicExpressWebApp, expressWebAppWithMongoDb} = require("./routes/expressWebApp")
let args = process.argv.splice(process.execArgv.length + 2);

module.exports = function boilerplate(){
   expressWebAppWithMongoDb()
}
