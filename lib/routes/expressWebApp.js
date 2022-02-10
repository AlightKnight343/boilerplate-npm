const fs = require('fs');
const path = require('path');
const { exec } = require("child_process");

const delay = ms => new Promise(r => setTimeout(r, ms));
const {indexJsContent, indexEjsContent, gitignoreContent, indexJsDbContent} = require("../content/expressWebApp.js");


async function basicExpressWebApp(){
    try{
       fs.promises.writeFile("./index.js", indexJsContent)
       fs.promises.mkdir("./views", {recursive: true})
       fs.promises.mkdir("./public", {recursive: true})
       fs.promises.mkdir("./public/css", {recursive: true})
       fs.promises.writeFile("./views/index.ejs", indexEjsContent)
       fs.promises.writeFile("./.gitignore", gitignoreContent)
       fs.promises.writeFile("./public/css/styles.css", "")
       fs.promises.writeFile("./.env", "")
       fs.promises.mkdir("./routes", {recursive: true})
       .then(() => {
           exec("npm init -y && npm install express ejs dotenv", (error, stdout, stderr)=>{
               if (error) {
                   console.log(`error: ${error.message}`);
                   return;
               }
               if (stderr) {
                   console.log(`stderr: ${stderr}`);
                   return;
               }
           })
       })
   }
   
   catch(err){
       console.log(err);
   }
}

async function expressWebAppWithMongoDb(){
    try{
        fs.promises.writeFile("./index.js", indexJsDbContent)
        fs.promises.mkdir("./views", {recursive: true})
        fs.promises.mkdir("./public", {recursive: true})
        fs.promises.mkdir("./public/css", {recursive: true})
        fs.promises.writeFile("./views/index.ejs", indexEjsContent)
        fs.promises.writeFile("./.gitignore", gitignoreContent)
        fs.promises.writeFile("./public/css/styles.css", "")
        fs.promises.writeFile("./.env","MONGO_URI=YOUR_MONGO_URI")
        fs.promises.mkdir("./routes", {recursive: true})
        .then(() => {
            exec("npm init -y && npm install express ejs dotenv mongoose", (error, stdout, stderr)=>{
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
            })
    })
    }catch(err){
    console.log(err)
    }
}



module.exports = {basicExpressWebApp, expressWebAppWithMongoDb}