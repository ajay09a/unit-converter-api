const express = require("express");
const router = express.Router();
const converterController = require("../controllers/converterController");

router.get("/convert/length", converterController.convertLength);

router.get("/", (req,res)=>{
    res.json({
        message: "Unit Converter API is running"
    });
});

module.exports = router;