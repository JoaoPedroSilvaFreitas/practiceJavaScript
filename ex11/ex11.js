function toCelsius()
{
    var temperature = document.getElementById("temperature").value;
    document.getElementById("celsius").innerHTML = ((temperature - 32)*5)/9;
}

function toFahrenheit()
{
    var temperature = document.getElementById("temperature").value;
    document.getElementById("fahrenheit").innerHTML = ((temperature)*1.8) + 32;
}