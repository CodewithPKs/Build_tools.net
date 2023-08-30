function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const resultElement = document.getElementById("result");
    
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();
    
    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365;
    
    resultElement.innerHTML = `
        <p style="font-size: 1.5rem; font-weight: 600; background-color: var(--clr-bright);">Your age is approximately:</p>
        ${Math.floor(ageInYears)} years<br>
        ${Math.floor(ageInDays)} days<br>
        ${Math.floor(ageInHours)} hours<br>
        ${Math.floor(ageInMinutes)} minutes<br>
        ${Math.floor(ageInSeconds)} seconds
    `;
}