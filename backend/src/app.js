const express = require("express");
const app = express();
const converterRoutes = require("./routes/converterRoutes");
const errorHandler = require("./errors/errorHandler");
const config = require("./config/config");
const logger = require("./middleware/logger");

const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.static("public"));

app.use(logger);

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

module.exports = app;