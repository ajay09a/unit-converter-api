const toCelsius = {
  c: (v) => v,
  f: (v) => (v - 32) * (5 / 9),
  k: (v) => v - 273.15,
};

const fromCelsius = {
  c: (v) => v,
  f: (v) => (v * 9) / 5 + 32,
  k: (v) => v + 273.15,
};

function temperatureConversion(value, from, to) {
  from = from.toLowerCase();
  to = to.toLowerCase();

  if (!(from in toCelsius) || !(to in fromCelsius)) {
    return null;
  }

  const celsius = toCelsius[from](value);
  return fromCelsius[to](celsius);
}

module.exports = temperatureConversion;