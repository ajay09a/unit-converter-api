require("dotenv").config();

const config = {
    port: process.env.PORT || 5000,
    apiVersion: "v1",
    appName: "Unit Converter API"
};

module.exports = config;