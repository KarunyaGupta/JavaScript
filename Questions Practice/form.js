const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};
  for (const [key, value] of formData) {
    jsonData[key] = value;
  }
  const jsonObject = JSON.stringify(jsonData);
  console.log(jsonObject);
  // Push the JSON object to your desired storage or API
  // For example, using the Fetch API:
  fetch('/api/formData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonObject
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});