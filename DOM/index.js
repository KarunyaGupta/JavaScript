// Get the input element and the heading element
const inputElement = document.getElementById('text');
const headingElement = document.getElementById('heading');

// Add an event listener to the submit button
document.getElementById('sub').addEventListener('click', () => {
  // Get the input value
  const inputValue = inputElement.value;

  // Update the heading text
  headingElement.textContent = inputValue;
});