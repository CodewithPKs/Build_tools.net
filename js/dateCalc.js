function calculateDays() {
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const resultElement = document.getElementById("result");
    
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    
    const timeDifference = endDate - startDate;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    
    resultElement.innerHTML = `Days between the two dates: ${Math.abs(Math.floor(daysDifference))}`;
}