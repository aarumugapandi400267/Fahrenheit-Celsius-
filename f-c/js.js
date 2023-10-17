function celsiusToFahrenheit(celsius) {
  return ((celsius -32) *5/9);
}
function convertCelsiusToFahrenheit() {
  const celsiusInput = document.getElementById("input");
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusInput.value);
  var fahrenheitTemperature1=fahrenheitTemperature.toFixed(2)
  document.getElementById("output").innerHTML="<h1>"+fahrenheitTemperature1+"</h1>"
}