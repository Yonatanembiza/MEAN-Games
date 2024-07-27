require("dotenv").config();
const path= require("path");
const express= require("express");

// create an app
const app= express();

// create server 
const server= app.listen(process.env.PORT, function(){
    console.log(process.env.SERVER_START_MESSAGE, server.address().port);
});

// folder for static pages
app.use(express.static(path.join(__dirname, "public")))

// creat get request
app.get("/index.html", function(req, res){
    console.log("Request is being served!");
    res.status(200).sendFile("index.html")
});