require("dotenv").config();
const express = require("express");
const app = express();
const converterRoutes = require("./src/routes/converterRoutes");
const errorHandler = require("./src/errors/errorHandler");
const config = require("./src/config/config");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json({
        message: `${config.appName}`,
        version: `${config.apiVersion}`,
        usage: `/api/${config.apiVersion}/convert/length?value=10&from=inch&to=cm`
    });
});

app.use(`/api/${config.apiVersion}`, converterRoutes);

// req wrong routes
app.use((req, res, next)=>{
    res.status(404).json({
        success: false,
        message: "routes not found"
    });
});

// handle error
app.use(errorHandler);

app.listen(config.port, ()=>{
    console.log(`Server is running on Port: ${config.port}`);
})