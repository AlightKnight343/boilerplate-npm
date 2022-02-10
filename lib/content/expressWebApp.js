const indexJsContent = `//initialize new express app
const express = require('express');
const app = express();

//ejs middleware
const ejs = require("ejs");
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true})); //bodyparser

app.use(express.static(path.join(__dirname, "public"))); //static files

app.get("/", (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('listening on port ' + port));`;

const indexEjsContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
`

const gitignoreContent = `
node_modules
build
npm-debug.log
.env
.DS_Store
`
const indexJsDbContent = `//initialize new express app
const express = require('express');
const app = express();
const mongoose = require("mongoose")

//ejs middleware
const ejs = require("ejs");
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true})); //bodyparser

app.use(express.static(path.join(__dirname, "public"))); //static files

//connecting to database
const dbUri = process.env.MONGO_URI
mongoose.connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, ()=>{
    console.log("connected to database")
})


app.get("/", (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('listening on port ' + port));`


module.exports = {
    indexJsContent, indexEjsContent, gitignoreContent, indexJsDbContent
};




