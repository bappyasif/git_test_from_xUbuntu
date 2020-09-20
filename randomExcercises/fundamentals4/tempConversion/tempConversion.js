const ftoc = function (fahrTemp) {
  // let fahrTemp = 45;
  let fahrToCelsius = (fahrTemp - 32) * 5 / 9;
  return (Math.round(fahrToCelsius * 10)/10);
  // let fahrToCelsius = (fahrTemp - 32) / 1.8;
  // return fahrToCelsius.toFixed(1);
  // return (Math.round(fahrToCelsius /10)*.1).toFixed(1);
}

const ctof = function (celTemp) {
  // let celTemp = 60;
  let cToFahr = (celTemp * (9 / 5)) + 32;
  return cToFahr.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
