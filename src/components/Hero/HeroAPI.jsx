
export const heroAPI = (cityName) => {
  let WeatherData = JSON.parse(localStorage.getItem('cities')) || [];; 
  
  console.log(cityName);

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=018399e824faf2110a59974f80cc6c36`)
    .then((response) => response.json())
    .then((data) => {
      if (WeatherData) {
        WeatherData = [...WeatherData, data];
      } 

      // const citiesWeather = JSON.parse(localStorage.getItem('cities')) || [];
   
      localStorage.setItem('cities', JSON.stringify(WeatherData)); 
    })
    .catch((error) => {
      console.error('Помилка при отриманні даних погоди:', error);
    });
};