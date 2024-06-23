document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the value from the textbox
    const userInput = document.getElementById('userInput').value;
    
    // Store the value (for example, in localStorage)
    localStorage.setItem('storedInput', userInput);
    
    // Display the stored value
    document.getElementById('storedText').innerText = 'Stored Input: ' + localStorage.getItem('storedInput');
});