const weatherData = [
  {
    city: "Tbilisi",
    temperature: 22,
    humidity: 55,
    windSpeed: 3.5,
    weatherMain: "Clouds",
    weatherDescription: "scattered clouds",
    weatherIcon: "03d",
  },
  {
    city: "Batumi",
    temperature: 25,
    humidity: 60,
    windSpeed: 4.2,
    weatherMain: "Clear",
    weatherDescription: "clear sky",
    weatherIcon: "01d",
  },
  {
    city: "Kutaisi",
    temperature: 20,
    humidity: 50,
    windSpeed: 2.8,
    weatherMain: "Rain",
    weatherDescription: "light rain",
    weatherIcon: "10d",
  },
  {
    city: "Rustavi",
    temperature: 23,
    humidity: 58,
    windSpeed: 3.0,
    weatherMain: "Clouds",
    weatherDescription: "broken clouds",
    weatherIcon: "04d",
  },
  {
    city: "Gori",
    temperature: 21,
    humidity: 52,
    windSpeed: 3.1,
    weatherMain: "Fog",
    weatherDescription: "foggy",
    weatherIcon: "50d",
  },
];

let text = document.getElementById("contentDiv");
let btn = document.getElementById("btn").addEventListener("click", () => {
  let cityInput = document.getElementById("city").value;
  for (info of weatherData) {
    if (info["city"].toLowerCase() == cityInput.toLowerCase()) {
      for (key in info) {
        text.innerHTML += `<li>${key}: ${info[key]}</li>`;
      }
    }
  }
});
