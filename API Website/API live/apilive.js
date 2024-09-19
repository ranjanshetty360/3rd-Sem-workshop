document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherDisplay = document.getElementById('weatherDisplay');
    const anotherServerDisplay = document.getElementById('anotherServerDisplay'); // Add a new element to display data from the second server
  
    getWeatherBtn.addEventListener('click', function() {
      const city = cityInput.value.trim();
      if (city !== '') {
        // Fetch weather data from OpenWeatherMap API
        fetch(`https://weather.com/en-IN/?Goto=Redirected`)
          .then(response => response.json())
          .then(data => {
            const weatherHTML = `
              <h2>Weather in ${city}</h2>
              <p>Temperature: ${data.main.temp}°F</p>
              <p>Humidity: ${data.main.humidity}%</p>
              <p>Weather: ${data.weather[0].description}</p>
            `;
            weatherDisplay.innerHTML = weatherHTML;
          })
          .catch(error => {
            weatherDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
            console.error('Error fetching weather:', error);
          });
  
        // Fetch data from another server
        fetch('https://search.yahoo.com/search?fr=mcafee&type=E210US1289G0&p=weather') // Replace with the actual API endpoint
          .then(response => response.json())
          .then(data => {
            const anotherServerHTML = `
              <h2>Data from another server:</h2>
              <p>${data.message}</p> // Replace with the actual data you want to display
            `;
            anotherServerDisplay.innerHTML = anotherServerHTML;
          })
          .catch(error => {
            anotherServerDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
            console.error('Error fetching data from another server:', error);
          });
      }
    });
  });