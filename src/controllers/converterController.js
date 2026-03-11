const convertLength = require("../utils/lengthConversion");

exports.convertLength = (req, res)=>{
    const value = Number(req.query.value);
    const from = req.query.from;
    const to = req.query.to;

    if(!value || !from || !to){
        return res.status(400).json({
            error: "required all field"
        });
    }
    
    const result = convertLength(value, from, to);

    if(result == null){
        return res.status(400).json({
            error: "conversion not valid"
        });
    }

    res.json({
        value: value,
        from: from,
        to: to,
        result: result
    })
}