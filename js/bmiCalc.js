function calculateBMI() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultElement = document.getElementById("result");
    const bmiMarker = document.getElementById("bmi-marker");
    const bmiArrow = document.getElementById("bmi-arrow");
    const weightCategory = document.getElementById("weight-category");
    
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    
    if (isNaN(weight) || isNaN(height)) {
        resultElement.innerHTML = "Please enter valid weight and height.";
        bmiMarker.style.backgroundColor = "#2196f3";
        weightCategory.style.display = "none";
        return;
    }
    
    const bmi = weight / ((height / 100) * (height / 100)); // Convert height to meters
    
    resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    
    const markerPosition = (bmi - 15) / 15 * 100; // Position marker on the meter
    bmiMarker.style.left = `${markerPosition}%`;
    bmiArrow.style.left = `${markerPosition}%`;
    
    weightCategory.style.display = "block";
    weightCategory.style.left = `${markerPosition}%`;
    
    if (bmi < 18.5) {
        weightCategory.style.backgroundColor = "#2196f3"; // Underweight
        resultElement.innerHTML += "<br>Underweight: You may need to gain weight.";
    } else if (bmi < 24.9) {
        weightCategory.style.backgroundColor = "#4caf50"; // Normal weight
        resultElement.innerHTML += "<br>Normal weight: You are in a healthy range.";
    } else if (bmi < 29.9) {
        weightCategory.style.backgroundColor = "#ffeb3b"; // Overweight
        resultElement.innerHTML += "<br>Overweight: You may need to lose some weight.";
    } else {
        weightCategory.style.backgroundColor = "#f44336"; // Obese
        resultElement.innerHTML += "<br>Obese: You may need to lose weight significantly.";

        
        // weightCategory.style.display = "block";
        // weightCategory.style.left = `${markerPosition}%`;
        // weightCategory.style.filter = `drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))`;
    }
    
}
