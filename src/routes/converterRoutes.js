const express = require("express");
const router = express.Router();
const lengthController = require("../controllers/lengthConverterController");
const weightController = require("../controllers/weightConverterController")
const temperatureController = require("../controllers/temperatureConverterController")

router.get("/convert/length", lengthController.convertLength);
router.get("/convert/weight", weightController.convertWeight);
router.get("/convert/temperature", temperatureController.convertTemperature);

router.get("/", (req,res)=>{
    res.json({
        message: "Unit Converter API is running"
    });
});

module.exports = router;