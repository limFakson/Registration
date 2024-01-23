console.log('apijs')

const apiUrl = 'http://127.0.0.1:8000/api/user/';

// Making a GET request
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the data from the API
    console.log(data);
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Fetch error:', error);
  });