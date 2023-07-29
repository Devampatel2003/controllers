// Import packages
const express = require("express");
const path = require("path");

const appRouter = require("./routes/appRouter");

// Create an express web app
const app = express();
const port = 2023; 

//Set up static folder,body parser,view engine
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended:false }));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//Routes
app.use("/",appRouter);

//Run the web app
app.listen(port,() => {
    console.log(`App http://localhost:${port}`);
});