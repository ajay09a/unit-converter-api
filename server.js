require("dotenv").config();
const config = require("./src/config/config");
const app = require("./src/app");

app.listen(config.port, ()=>{
    console.log(`Server is running on Port: ${config.port}`);
})