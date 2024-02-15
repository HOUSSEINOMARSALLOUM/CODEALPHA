function calculateAge() {
    // Get the loader span element
    var loader = document.querySelector('.loader');

    // Show the loader immediately
    loader.style.display = 'inline-block';

    // Get the date of birth input and calculate age
    var dobInput = document.getElementById('dob');
    var dobValue = new Date(dobInput.value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobValue.getFullYear();

    if (currentDate.getMonth() < dobValue.getMonth() || 
        (currentDate.getMonth() === dobValue.getMonth() && currentDate.getDate() < dobValue.getDate())) {
        age--;
    }

    // Display the age result after a short delay
    setTimeout(function() {
        // Display the age result
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = "Your age is: " + age + " years";

        // Hide the loader after the age calculation is done
        loader.style.display = 'none';
    }, 1000); // We can Adjust the delay time as needed
}

