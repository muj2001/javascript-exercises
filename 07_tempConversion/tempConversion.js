const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * 5/9;
  celsiusTemp = Number(celsiusTemp.toFixed(1));
  return celsiusTemp

};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
  fahrenheitTemp = Number(fahrenheitTemp.toFixed(1));
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
