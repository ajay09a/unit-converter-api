const toGram = {
    mg: 0.001,
    gram: 1,
    kg: 1000,
    ounce: 28.3495,
    pound: 453.592,
}

function weightConversion(value, from, to){
    if(!toGram[from] || !toGram[to]){
        return null;
    }
    const gram = value * toGram[from];
    const result = gram/toGram[to];

    return result;
}

module.exports = weightConversion;