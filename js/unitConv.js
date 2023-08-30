
document.addEventListener("DOMContentLoaded", function () {
    const lengthConverterBtn = document.getElementById("lengthConverterBtn");
    const temperatureConvertBtn = document.getElementById("temperatureConverterBtn");
    const weightConverterBtn = document.getElementById("weightConverterBtn");
    const timeConverterBtn = document.getElementById("timeConverterBtn");


    const lengthConverter = document.querySelector(".length-converter");
    const temperatureConverter = document.querySelector(".temperature-converter");
    const weightConverter = document.querySelector(".weight-converter");
    const timeConverter = document.querySelector(".time-converter");



    // show thw length converter by default
    // lengthConverter.style.display = "block"

    
    // Add click event listeners for the converter buttons
    lengthConverterBtn.addEventListener("click", function () {
        showConverter(lengthConverter);
    });

    temperatureConverterBtn.addEventListener("click", function () {
        showConverter(temperatureConverter);
    });

    weightConverterBtn.addEventListener("click", function () {
        showConverter(weightConverter);
    });

    timeConverterBtn.addEventListener("click", function () {
        showConverter(timeConverter);
    });

    function showConverter(converter) {
        const converters = document.querySelectorAll(".converter-section");
        converters.forEach(function (section) {
            section.style.display = "none";
        });
        converter.style.display = "block";
    }

    const convertButton = document.getElementById("convertBtn");
    const resultElement = document.getElementById("unit-result");
    

    convertButton.addEventListener("click", function () {
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        const inputValue = parseFloat(document.getElementById("inputValue").value);

        if (isNaN(inputValue)) {
            resultElement.textContent = "Please enter a valid number.";
            return;
        }

        let result;

        if (fromUnit === "meters" && toUnit === "feet") {
            result = inputValue * 3.28084;
            resultElement.textContent = `${inputValue} meters is equal to ${result.toFixed(2)} feet.`;
        } else if (fromUnit === "feet" && toUnit === "meters") {
            result = inputValue / 3.28084;
            resultElement.textContent = `${inputValue} feet is equal to ${result.toFixed(2)} meters.`;
        } else if (fromUnit === "meters" && toUnit === "inches") {
            result = inputValue * 39.3701;
            resultElement.textContent = `${inputValue} meters is equal to ${result.toFixed(2)} inches.`;
        } else if (fromUnit === "inches" && toUnit === "meters") {
            result = inputValue / 39.3701;
            resultElement.textContent = `${inputValue} inches is equal to ${result.toFixed(2)} meters.`;
        } else if (fromUnit === "feet" && toUnit === "inches") {
            result = inputValue * 12;
            resultElement.textContent = `${inputValue} feet is equal to ${result.toFixed(2)} inches.`;
        } else if (fromUnit === "inches" && toUnit === "feet") {
            result = inputValue / 12;
            resultElement.textContent = `${inputValue} inches is equal to ${result.toFixed(2)} feet.`;
        } else if(fromUnit === "meters" && toUnit === "centimeters") {
            result = inputValue * 100;
            resultElement.textContent =`${inputValue} meters is equal to ${result.toFixed(2)} centimeters.`;
        } else if(fromUnit === "centimeters" && toUnit === "meters") {
            result = inputValue / 100;
            resultElement.textContent =`${inputValue} centimetre is equal to ${result.toFixed(2)} meters.`;
        }  else if(fromUnit === "meters" && toUnit === "kilometers") {
            result = inputValue / 1000;
            resultElement.textContent =`${inputValue} meters is equal to ${result.toFixed(2)} kilometers.`;
        }   else if(fromUnit === "kilometers" && toUnit === "meters") {
            result = inputValue * 1000;
            resultElement.textContent =`${inputValue} kilometers is equal to ${result.toFixed(2)} meters.`;
        }   else if(fromUnit === "meters" && toUnit === "millimeters") {
            result = inputValue * 1000;
            resultElement.textContent =`${inputValue} meters is equal to ${result.toFixed(2)} millimeters.`;
        }   else if(fromUnit === "millimeters" && toUnit === "meters") {
            result = inputValue / 1000;
            resultElement.textContent =`${inputValue} millimeters is equal to ${result.toFixed(2)} meters.`;
        }   else if(fromUnit === "centimeters" && toUnit === "kilometers") {
            result = inputValue / 100000;
            resultElement.textContent =`${inputValue} centimeters is equal to ${result.toFixed(2)} kilometers.`;
        }   else if(fromUnit === "kilometers" && toUnit === "centimeters") {
            result = inputValue * 100000;
            resultElement.textContent =`${inputValue} kilometers is equal to ${result.toFixed(2)} centimeters.`;
        }   else if(fromUnit === "centimeters" && toUnit === "feet") {
            result = inputValue / 30.48;
            resultElement.textContent =`${inputValue} centimeters is equal to ${result.toFixed(2)} feet.`;
        }   else if(fromUnit === "feet" && toUnit === "centimeters") {
            result = inputValue * 30.48;
            resultElement.textContent =`${inputValue} feet is equal to ${result.toFixed(2)} centimeters.`;
        }   else if(fromUnit === "centimeters" && toUnit === "inches") {
            result = inputValue / 2.54;
            resultElement.textContent =`${inputValue} centimeters is equal to ${result.toFixed(2)} inches.`;
        }   else if(fromUnit === "inches" && toUnit === "centimeters") {
            result = inputValue * 2.54;
            resultElement.textContent =`${inputValue} inches is equal to ${result.toFixed(2)} centimeters.`;
        }   else if(fromUnit === "centimeters" && toUnit === "millimeters") {
            result = inputValue * 10;
            resultElement.textContent =`${inputValue} centimeters is equal to ${result.toFixed(2)} millimeters.`;
        }   else if(fromUnit === "millimeters" && toUnit === "centimeters") {
            result = inputValue / 10;
            resultElement.textContent =`${inputValue} millimeters is equal to ${result.toFixed(2)} centimeters.`;
        }    else if(fromUnit === "kilometers" && toUnit === "feet") {
            result = inputValue * 3280.84;
            resultElement.textContent =`${inputValue} kilometers is equal to ${result.toFixed(2)} feet.`;
        }    else if(fromUnit === "feet" && toUnit === "kilometers") {
            result = inputValue / 3280.84;
            resultElement.textContent =`${inputValue} feet is equal to ${result.toFixed(2)} kilometers.`;
        }   else if(fromUnit === "kilometers" && toUnit === "inches") {
            result = inputValue * 39370.1;
            resultElement.textContent =`${inputValue} kilometers is equal to ${result.toFixed(2)} inches.`;
        }   else if(fromUnit === "inches" && toUnit === "kilometers") {
            result = inputValue / 39370.1;
            resultElement.textContent =`${inputValue} inches is equal to ${result.toFixed(2)} kilometers.`;
        }   else if(fromUnit === "kilometers" && toUnit === "millimeters") {
            result = inputValue * 1e+6;
            resultElement.textContent =`${inputValue} inches is equal to ${result.toFixed(2)} kilometers.`;
        }   else if(fromUnit === "millimeters" && toUnit === "kilometers") {
            result = inputValue / 1e+6;
            resultElement.textContent =`${inputValue} inches is equal to ${result.toFixed(2)} kilometers.`;
        }   else if(fromUnit === "feet" && toUnit === "millimeters") {
            result = inputValue * 304.8;
            resultElement.textContent =`${inputValue} feet is equal to ${result.toFixed(2)} millimeters.`;
        }   else if(fromUnit === "millimeters" && toUnit === "feet") {
            result = inputValue / 304.8;
            resultElement.textContent =`${inputValue} millimeters is equal to ${result.toFixed(2)} feet.`;
        }    else if(fromUnit === "millimeters" && toUnit === "inches") {
            result = inputValue / 25.4;
            resultElement.textContent =`${inputValue} millimeters is equal to ${result.toFixed(2)} inches.`;
        }    else if(fromUnit === "inches" && toUnit === "millimeters") {
            result = inputValue * 25.4;
            resultElement.textContent =`${inputValue} inches is equal to ${result.toFixed(2)} millimeters.`;
        }
      
        resultElement.style.color = "red"
        resultElement.style.backgroundColor = "#EFF2F9"

       





        
    });
    // temperature converter

const convertButtonTemp = document.getElementById("convertBtnTemp");
const resultElementTemp = document.getElementById("unit-resultTemp");

convertButtonTemp.addEventListener("click", function () {
const fromUnitTemp = document.getElementById("fromUnitTemp").value;
const toUnitTemp = document.getElementById("toUnitTemp").value;
const inputValueTemp = parseFloat(document.getElementById("inputValueTemp").value);

if (isNaN(inputValueTemp)) {
    resultElementTemp.textContent = "Please enter a valid number.";
    return;
}

let resultTemp;

if (fromUnitTemp === "celsius" && toUnitTemp === "fahrenheit") {
    resultTemp = (inputValueTemp * 9/5) + 32;
    resultElementTemp.textContent = `${inputValueTemp} Celsius is equal to ${resultTemp.toFixed(2)} Fahrenheit.`;
} else if (fromUnitTemp === "fahrenheit" && toUnitTemp === "celsius") {
    resultTemp = (inputValueTemp - 32) * 5/9;
    resultElementTemp.textContent = `${inputValueTemp} Fahrenheit is equal to ${resultTemp.toFixed(2)} Celsius.`;
} else if (fromUnitTemp === "celsius" && toUnitTemp === "kelvin") {
    resultTemp = inputValueTemp + 273.15;
    resultElementTemp.textContent = `${inputValueTemp} Celsius is equal to ${resultTemp.toFixed(2)} Kelvin.`;
} else if (fromUnitTemp === "kelvin" && toUnitTemp === "celsius") {
    resultTemp = inputValueTemp - 273.15;
    resultElementTemp.textContent = `${inputValueTemp} Kelvin is equal to ${resultTemp.toFixed(2)} Celsius.`;
} else if (fromUnitTemp === "fahrenheit" && toUnitTemp === "kelvin") {
    resultTemp = (inputValueTemp - 32) * 5/9 + 273.15;
    resultElementTemp.textContent = `${inputValueTemp} Fahrenheit is equal to ${resultTemp.toFixed(2)} Kelvin.`;
} else if (fromUnitTemp === "kelvin" && toUnitTemp === "fahrenheit") {
    resultTemp = (inputValueTemp - 273.15) * 9/5 + 32;
    resultElementTemp.textContent = `${inputValueTemp} Kelvin is equal to ${resultTemp.toFixed(2)} Fahrenheit.`;
}
resultElementTemp.style.color = "red";
resultElementTemp.style.backgroundColor = "#EFF2F9";
});
   
//Time Converter Code

const timeConvertButton = document.getElementById("timeconvertBtn");
const timeResultElement = document.getElementById("time-unit-result");

timeConvertButton.addEventListener("click", function () {
    const timeFromUnit = document.getElementById("timefromUnit").value;
    const timeToUnit = document.getElementById("timetoUnit").value;
    const timeInputValue = parseFloat(document.getElementById("timeinputValue").value);

    if (isNaN(timeInputValue)) {
        timeResultElement.textContent = "Please enter a valid number.";
        return;
    }

    let timeResult;

    if (timeFromUnit === "seconds" && timeToUnit === "minutes") {
        timeResult = timeInputValue / 60;
        timeResultElement.textContent = `${timeInputValue} seconds is equal to ${timeResult.toFixed(2)} minutes.`;
    } else if (timeFromUnit === "minutes" && timeToUnit === "seconds") {
        timeResult = timeInputValue * 60;
        timeResultElement.textContent = `${timeInputValue} minutes is equal to ${timeResult.toFixed(2)} seconds.`;
    } else if (timeFromUnit === "hours" && timeToUnit === "minutes") {
        timeResult = timeInputValue * 60;
        timeResultElement.textContent = `${timeInputValue} hours is equal to ${timeResult.toFixed(2)} minutes.`;
    } else if (timeFromUnit === "minutes" && timeToUnit === "hours") {
        timeResult = timeInputValue / 60;
        timeResultElement.textContent = `${timeInputValue} minutes is equal to ${timeResult.toFixed(2)} hours.`;
    } else if (timeFromUnit === "hours" && timeToUnit === "seconds") {
        timeResult = timeInputValue * 3600;
        timeResultElement.textContent = `${timeInputValue} hours is equal to ${timeResult.toFixed(2)} seconds.`;
    } else if (timeFromUnit === "seconds" && timeToUnit === "hours") {
        timeResult = timeInputValue / 3600;
        timeResultElement.textContent = `${timeInputValue} seconds is equal to ${timeResult.toFixed(2)} hours.`;
    } else if (timeFromUnit === "days" && timeToUnit === "hours") {
        timeResult = timeInputValue * 24;
        timeResultElement.textContent = `${timeInputValue} days is equal to ${timeResult.toFixed(2)} hours.`;
    } else if (timeFromUnit === "hours" && timeToUnit === "days") {
        timeResult = timeInputValue / 24;
        timeResultElement.textContent = `${timeInputValue} hours is equal to ${timeResult.toFixed(2)} days.`;
    } else if (timeFromUnit === "weeks" && timeToUnit === "days") {
        timeResult = timeInputValue * 7;
        timeResultElement.textContent = `${timeInputValue} weeks is equal to ${timeResult.toFixed(2)} days.`;
    } else if (timeFromUnit === "days" && timeToUnit === "weeks") {
        timeResult = timeInputValue / 7;
        timeResultElement.textContent = `${timeInputValue} days is equal to ${timeResult.toFixed(2)} weeks.`;
    } else if (timeFromUnit === "seconds" && timeToUnit === "days") {
        timeResult = timeInputValue / 86400;
        timeResultElement.textContent = `${timeInputValue} seconds is equal to ${timeResult.toFixed(2)} days.`;
    } else if (timeFromUnit === "seconds" && timeToUnit === "weeks") {
        timeResult = timeInputValue / 604800;
        timeResultElement.textContent = `${timeInputValue} seconds is equal to ${timeResult.toFixed(2)} weeks.`;
    } else if (timeFromUnit === "seconds" && timeToUnit === "months") {
        timeResult = timeInputValue / 2628000;
        timeResultElement.textContent = `${timeInputValue} seconds is equal to ${timeResult.toFixed(2)} months.`;
    } else if (timeFromUnit === "seconds" && timeToUnit === "year") {
        timeResult = timeInputValue / 31557600;
        timeResultElement.textContent = `${timeInputValue} seconds is equal to ${timeResult.toFixed(2)} years.`;
    } else if (timeFromUnit === "minutes" && timeToUnit === "days") {
        timeResult = timeInputValue * 0.0006944444;
        timeResultElement.textContent = `${timeInputValue} minutes is equal to ${timeResult.toFixed(2)} days.`;
    } else if (timeFromUnit === "minutes" && timeToUnit === "weeks") {
        timeResult = timeInputValue * 0.0000992063;
        timeResultElement.textContent = `${timeInputValue} seconds is equal to ${timeResult.toFixed(2)} weeks.`;
    } else if (timeFromUnit === "minutes" && timeToUnit === "months") {
        timeResult = timeInputValue * 0.0000228311;
        timeResultElement.textContent = `${timeInputValue} minutes is equal to ${timeResult.toFixed(2)} months.`;
    } else if (timeFromUnit === "minutes" && timeToUnit === "year") {
        timeResult = timeInputValue * 0.0000019013;
        timeResultElement.textContent = `${timeInputValue} minutes is equal to ${timeResult.toFixed(2)} years.`;
    } else if (timeFromUnit === "hours" && timeToUnit === "weeks") {
        timeResult = timeInputValue * 0.005952381;
        timeResultElement.textContent = `${timeInputValue} hours is equal to ${timeResult.toFixed(2)} weeks.`;
    } else if (timeFromUnit === "hours" && timeToUnit === "months") {
        timeResult = timeInputValue * 0.001369863;
        timeResultElement.textContent = `${timeInputValue} hours is equal to ${timeResult.toFixed(2)} months.`;
    } else if (timeFromUnit === "hours" && timeToUnit === "year") {
        timeResult = timeInputValue * 0.0001140771;
        timeResultElement.textContent = `${timeInputValue} hours is equal to ${timeResult.toFixed(2)} year.`;
    } else if (timeFromUnit === "days" && timeToUnit === "seconds") {
        timeResult = timeInputValue * 86400;
        timeResultElement.textContent = `${timeInputValue} days is equal to ${timeResult.toFixed(2)} seconds.`;
    } else if (timeFromUnit === "days" && timeToUnit === "minutes") {
        timeResult = timeInputValue * 1440;
        timeResultElement.textContent = `${timeInputValue} days is equal to ${timeResult.toFixed(2)} minutes.`;
    } else if (timeFromUnit === "days" && timeToUnit === "months") {
        timeResult = timeInputValue * 0.0328767123;
        timeResultElement.textContent = `${timeInputValue} days is equal to ${timeResult.toFixed(2)} months.`;
    } else if (timeFromUnit === "days" && timeToUnit === "year") {
        timeResult = timeInputValue * 0.0027378508;
        timeResultElement.textContent = `${timeInputValue} days is equal to ${timeResult.toFixed(2)} year.`;
    } else if (timeFromUnit === "weeks" && timeToUnit === "seconds") {
        timeResult = timeInputValue * 604800;
        timeResultElement.textContent = `${timeInputValue} weeks is equal to ${timeResult.toFixed(2)} seconds.`;
    } else if (timeFromUnit === "weeks" && timeToUnit === "minutes") {
        timeResult = timeInputValue * 10080;
        timeResultElement.textContent = `${timeInputValue} weeks is equal to ${timeResult.toFixed(2)} minutes.`;
    } else if (timeFromUnit === "weeks" && timeToUnit === "hours") {
        timeResult = timeInputValue * 168;
        timeResultElement.textContent = `${timeInputValue} weeks is equal to ${timeResult.toFixed(2)} hours.`;
    } else if (timeFromUnit === "weeks" && timeToUnit === "months") {
        timeResult = timeInputValue * 0.2301369863;
        timeResultElement.textContent = `${timeInputValue} weeks is equal to ${timeResult.toFixed(2)} months.`;
    } else if (timeFromUnit === "weeks" && timeToUnit === "year") {
        timeResult = timeInputValue * 0.0191649555;
        timeResultElement.textContent = `${timeInputValue} weeks is equal to ${timeResult.toFixed(2)} year.`;
    } else if (timeFromUnit === "months" && timeToUnit === "seconds") {
        timeResult = timeInputValue * 2628000;
        timeResultElement.textContent = `${timeInputValue} months is equal to ${timeResult.toFixed(2)} seconds.`;
    } else if (timeFromUnit === "months" && timeToUnit === "minutes") {
        timeResult = timeInputValue * 43800;
        timeResultElement.textContent = `${timeInputValue} months is equal to ${timeResult.toFixed(2)} minutes.`;
    } else if (timeFromUnit === "months" && timeToUnit === "hours") {
        timeResult = timeInputValue * 730;
        timeResultElement.textContent = `${timeInputValue} months is equal to ${timeResult.toFixed(2)} hours.`;
    } else if (timeFromUnit === "months" && timeToUnit === "days") {
        timeResult = timeInputValue * 30.416666667;
        timeResultElement.textContent = `${timeInputValue} months is equal to ${timeResult.toFixed(2)} days.`;
    } else if (timeFromUnit === "months" && timeToUnit === "weeks") {
        timeResult = timeInputValue * 4.3452380952;
        timeResultElement.textContent = `${timeInputValue} months is equal to ${timeResult.toFixed(2)} weeks.`;
    } else if (timeFromUnit === "months" && timeToUnit === "year") {
        timeResult = timeInputValue * 0.0832762948;
        timeResultElement.textContent = `${timeInputValue} months is equal to ${timeResult.toFixed(2)} year.`;
    } else if (timeFromUnit === "year" && timeToUnit === "seconds") {
        timeResult = timeInputValue * 31557600;
        timeResultElement.textContent = `${timeInputValue} year is equal to ${timeResult.toFixed(2)} seconds.`;
    } else if (timeFromUnit === "year" && timeToUnit === "minutes") {
        timeResult = timeInputValue * 525960;
        timeResultElement.textContent = `${timeInputValue} year is equal to ${timeResult.toFixed(2)} minutes.`;
    } else if (timeFromUnit === "year" && timeToUnit === "hours") {
        timeResult = timeInputValue * 8766;
        timeResultElement.textContent = `${timeInputValue} year is equal to ${timeResult.toFixed(2)} hours.`;
    } else if (timeFromUnit === "year" && timeToUnit === "months") {
        timeResult = timeInputValue * 12.008219178;
        timeResultElement.textContent = `${timeInputValue} year is equal to ${timeResult.toFixed(2)} months.`;
    } else if (timeFromUnit === "year" && timeToUnit === "weeks") {
        timeResult = timeInputValue * 52.178571429;
        timeResultElement.textContent = `${timeInputValue} year is equal to ${timeResult.toFixed(2)} weeks.`;
    } else if (timeFromUnit === "year" && timeToUnit === "days") {
        timeResult = timeInputValue * 365.25;
        timeResultElement.textContent = `${timeInputValue} year is equal to ${timeResult.toFixed(2)} days.`;
    }
     else if (timeFromUnit === timeToUnit) {
        timeResultElement.textContent = "Please select different units for conversion.";
    } 

    timeResultElement.style.color = "red";
    timeResultElement.style.backgroundColor = "#EFF2F9";
});

// weight convetrer

const weightConvert = document.getElementById("convertBtnWeight");
const weigthResultElem = document.getElementById("unit-resultWeight");

weightConvert.addEventListener("click" , function() {
    const fromUnitWeight = document.getElementById('fromUnitWeight').value;
    const toUnitWeight = document.getElementById('toUnitWeight').value;
    const inputValueWeight = parseFloat(document.getElementById('inputValueWeight').value);

    if(isNaN(inputValueWeight)) {
        weigthResultElem.textContent = "Please enter a valid number.";
        return;
    }

    let weigthResult;

    if(fromUnitWeight == "kilogram" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 1000;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(2)} grams`;
    } else if(fromUnitWeight == "kilogram" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 1000000;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(2)} milligrams`;
    } else if(fromUnitWeight == "kilogram" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 1000000000;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(2)} micrograms`;
    } else if(fromUnitWeight == "kilogram" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 0.001;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(3)} tons`;
    } else if(fromUnitWeight == "kilogram" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 2.2046226218;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(3)} pounds[lbs]`;
    } else if(fromUnitWeight == "kilogram" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 35.27396195;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(3)} ounce`;
    } else if(fromUnitWeight == "kilogram" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 0.0011023113;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(4)} tons(us)`;
    } else if(fromUnitWeight == "kilogram" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 0.0009842065;
        weigthResultElem.textContent = `${inputValueWeight} kilogram is equal to ${weigthResult.toFixed(4)} tons(uk)`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 0.001;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(3)} kilogram`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 1000;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(2)} milligrams`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 1000000;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(2)} microgram`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 0.000001;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(5)} ton`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 0.0022046226;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(3)} pound[lbs]`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 0.0352739619;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(3)} ounce`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 0.0000011023;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(5)} ton(us)`;
    } else if(fromUnitWeight == "gram" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 9.842065276E-7;
        weigthResultElem.textContent = `${inputValueWeight} gram is equal to ${weigthResult.toFixed(5)} ton(uk)`;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 0.001;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(3)} `;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 0.000001;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(3)} kilogram`;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 1000;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(3)} microgram`;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 1.E-9;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(5)} ton`;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 0.0000022046;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(5)} pound`;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 0.000035274;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(5)} `;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 1.10231131E-9;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(5)} ton(us)`;
    } else if(fromUnitWeight == "milligram" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 9.842065276E-10;
        weigthResultElem.textContent = `${inputValueWeight} milligram is equal to ${weigthResult.toFixed(5)} ton(uk)`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 0.000001;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} grams`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 1.E-9;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} kilograms`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 0.001;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} milligrams`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 1.E-12;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} ton`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 2.204622621E-9;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} pound`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 3.527396194E-8;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} ounce`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 1.10231131E-12;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} ton(us)`;
    } else if(fromUnitWeight == "microgram" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 9.842065276E-13;
        weigthResultElem.textContent = `${inputValueWeight} microgram is equal to ${weigthResult.toFixed(5)} ton(uk)`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 1000000;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(2)} grams`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 1000;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(2)} kilograms`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 1000000000;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(2)} milligrams`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 1000000000000;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(2)} micrograms`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 2204.6226218;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(3)} pounds`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 35273.96195;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(3)} ounce`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 1.1023113109;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(5)} ton(us)`;
    } else if(fromUnitWeight == "ton" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 0.9842065276;
        weigthResultElem.textContent = `${inputValueWeight} ton is equal to ${weigthResult.toFixed(5)} ton(uk)`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 453.59237;
        weigthResultElem.textContent = `${inputValueWeight} pounds is equal to ${weigthResult.toFixed(3)} grams`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 0.45359237;
        weigthResultElem.textContent = `${inputValueWeight} pounds is equal to ${weigthResult.toFixed(4)} kilograms`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 453592.37;
        weigthResultElem.textContent = `${inputValueWeight} pounds is equal to ${weigthResult.toFixed(2)} milligrams`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 453592370;
        weigthResultElem.textContent = `${inputValueWeight} pounds is equal to ${weigthResult.toFixed(2)} micrograms`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 0.0004535924;
        weigthResultElem.textContent = `${inputValueWeight} pounds is equal to ${weigthResult.toFixed(5)} tons`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 16;
        weigthResultElem.textContent = `${inputValueWeight} pounds equal to ${weigthResult.toFixed(2)} ounce`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 0.0005;
        weigthResultElem.textContent = `${inputValueWeight} pounds is equal to ${weigthResult.toFixed(4)} ton(us)`;
    } else if(fromUnitWeight == "pound" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 0.0004464286;
        weigthResultElem.textContent = `${inputValueWeight} pounds is equal to ${weigthResult.toFixed(5)} ton(uk)`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 28.349523125;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(3)} grams`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 0.0283495231;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(5)} kilograms`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 28349.523125;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(3)} milligram`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 28349523.125;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(3)} microgram`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 0.0000283495;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(5)} ton`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 0.0625;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(3)} pound`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 0.00003125;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(5)} ton(us)`;
    } else if(fromUnitWeight == "ounce" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 0.0000279018;
        weigthResultElem.textContent = `${inputValueWeight} ounce is equal to ${weigthResult.toFixed(5)} ton(uk)`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 907184.74;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(2)} grams`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 907.18474;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(3)} kilograms`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 907184740;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(3)} milligram`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 907184740000;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(3)} microgram`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 0.90718474;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(4)} ton`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 2000;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(3)} pound`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 32000;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(3)} ounce`;
    } else if(fromUnitWeight == "ton(us)" && toUnitWeight == "ton(uk)") {
        weigthResult = inputValueWeight * 0.8928571429;
        weigthResultElem.textContent = `${inputValueWeight} ton(us) is equal to ${weigthResult.toFixed(5)} ton(uk)`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "gram") {
        weigthResult = inputValueWeight * 1016046.9088;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(3)} gram`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "kilogram") {
        weigthResult = inputValueWeight * 1016.0469088;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(4)} kilogram`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "milligram") {
        weigthResult = inputValueWeight * 1016046908.8;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(3)} milligram`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "microgram") {
        weigthResult = inputValueWeight * 1016046908800;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(3)} microgram`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "ton") {
        weigthResult = inputValueWeight * 1.0160469088;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(3)} ton`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "pound") {
        weigthResult = inputValueWeight * 2240;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(3)} pound`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "ounce") {
        weigthResult = inputValueWeight * 35840;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(3)} ounce`;
    } else if(fromUnitWeight == "ton(uk)" && toUnitWeight == "ton(us)") {
        weigthResult = inputValueWeight * 1.12;
        weigthResultElem.textContent = `${inputValueWeight} ton(uk) is equal to ${weigthResult.toFixed(3)} ton(us)`;
    } else if (timeFromUnit === timeToUnit) {
        weigthResultElem.textContent = "Please select different units for conversion.";
    } 

    weigthResultElem.style.color = "red";
    weigthResultElem.style.backgroundColor = "#EFF2F9";
    
})



});


