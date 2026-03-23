const express = require("express");
const router = express.Router();
const lengthController = require("../controllers/converterController");
const weightController = require("../controllers/weightConverterController")

router.get("/convert/length", lengthController.convertLength);
router.get("/convert/weight", weightController.convertWeight);

router.get("/", (req,res)=>{
    res.json({
        message: "Unit Converter API is running"
    });
});

module.exports = router;