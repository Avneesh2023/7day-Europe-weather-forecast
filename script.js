const citySelect = document.getElementById("city");
const forecastDiv = document.getElementById("forecast");

citySelect.addEventListener("change", () => {
  const [lat, lon] = citySelect.value.split(",");
  getWeatherForecast(lat, lon);
});

window.addEventListener("load", () => {
  const [lat, lon] = citySelect.value.split(",");
  getWeatherForecast(lat, lon);
});

async function getWeatherForecast(lat, lon) {
  const url = `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    forecastDiv.innerHTML = "";
    const series = data.dataseries.slice(0, 7);

    series.forEach((day, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);

      const temp = `${day.temp2m}°C`;
      const weather = day.weather.toLowerCase();
      const iconSrc = getWeatherIcon(weather);

      const card = document.createElement("div");
      card.className = "day";
      card.innerHTML = `
        <h3>${date.toDateString()}</h3>
        <img src="${iconSrc}" alt="${weather}" class="weather-icon" />
        <p><b>${formatWeatherName(weather)}</b></p>
        <p><b>Temp:</b> ${temp}</p>
      `;

      forecastDiv.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    forecastDiv.innerHTML = "<p>Unable to load forecast.</p>";
  }
}

function getWeatherIcon(weather) {
  if (weather.includes("clear")) return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  if (weather.includes("cloud")) return "https://cdn-icons-png.flaticon.com/512/414/414825.png";
  if (weather.includes("rain")) return "https://cdn-icons-png.flaticon.com/512/3313/3313888.png";
  if (weather.includes("snow")) return "https://cdn-icons-png.flaticon.com/512/642/642102.png";
  if (weather.includes("thunder")) return "https://cdn-icons-png.flaticon.com/512/1779/1779940.png";
  if (weather.includes("shower")) return "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
  return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
}

function formatWeatherName(name) {
  return name.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}