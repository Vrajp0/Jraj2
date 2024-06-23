

// Define the form and input elements
const form = document.getElementById('inputForm') as HTMLFormElement;
const input = document.getElementById('userInput') as HTMLInputElement;

// Add event listener for form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the value from the textbox
    const userInput = input.value;
    
    // Create a new Blob object using the text
    const blob = new Blob([userInput], { type: 'text/plain' });
    
    // Create a link element
    const link = document.createElement('a');
    
    // Set the download attribute with a filename
    link.download = 'userInput.txt';
    
    // Create a URL for the Blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
});