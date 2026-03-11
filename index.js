require("dotenv").config();
const express = require("express");
const app = express();
const converterRoutes = require("./src/routes/converterRoutes");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use("/api/v1", converterRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
})