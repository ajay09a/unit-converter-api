// conversion factors relative to 1 meter
const toMeter = {
    mm: 0.001,
    cm: 0.01,
    meter: 1,
    km: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344
};

function convertLength(value, from, to){
    if(!toMeter[from] || !toMeter[to]){
        return null;
    }
    const meter = value * toMeter[from];
    const result = meter/toMeter[to];
    return result;
}

module.exports = convertLength;