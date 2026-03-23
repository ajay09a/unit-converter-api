const convertTemperature = require("../utils/temperatureConversion");

exports.convertTemperature = (req, res, next)=>{
    const value = Number(req.query.value);
    const from = req.query.from;
    const to = req.query.to;

    if(!value || !from ||!to){
        return next({
            status: 400,
            message: "required all fields",
        });
    }

    const result = convertTemperature(value, from , to);

    if(result == null){
        return next({
            status: 400,
            message: "Invalid conversion"
        });
    }

    res.json({
        value: value,
        from: from,
        to: to,
        result: result
    })
}