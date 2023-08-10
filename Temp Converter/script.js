document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.addEventListener("click", convertTemperature);
});

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");

    let convertedTemp;

    if (fromUnit === "celsius") {
        convertedTemp = celsiusToFahrenheit(inputTemp);
        resultElement.textContent = `${inputTemp}°C is ${convertedTemp.toFixed(2)}°F`;
    } else if (fromUnit === "fahrenheit") {
        convertedTemp = fahrenheitToCelsius(inputTemp);
        resultElement.textContent = `${inputTemp}°F is ${convertedTemp.toFixed(2)}°C`;
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
