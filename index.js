require("dotenv").config();
const express = require("express");
const app = express();
const converterRoutes = require("./src/routes/converterRoutes");
const errorHandler = require("./src/errors/errorHandler");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use("/api/v1", converterRoutes);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
})