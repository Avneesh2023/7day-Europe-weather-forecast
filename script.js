const citySelect = document.getElementById('citySelect');
const forecastDiv = document.getElementById('forecast');
const getWeatherBtn = document.getElementById('getWeatherBtn');

// Hide the button (auto fetch mode)
getWeatherBtn.style.display = "none";

citySelect.addEventListener('change', getWeather);

async function getWeather() {
  forecastDiv.innerHTML = '';

  if (!citySelect.value) {
    forecastDiv.innerHTML = '<p>Please select a city.</p>';
    return;
  }

  const [lat, lon] = citySelect.value.split(',');
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const days = data.daily.time;
    const tempsMax = data.daily.temperature_2m_max;
    const tempsMin = data.daily.temperature_2m_min;
    const codes = data.daily.weathercode;

    for (let i = 0; i < days.length; i++) {
      const div = document.createElement('div');
      div.classList.add('day');

      const icon = getWeatherIcon(codes[i]);
      div.innerHTML = `
        <h3>${new Date(days[i]).toDateString().slice(0, 10)}</h3>
        <img src="${icon}" alt="weather">
        <p>Max: ${tempsMax[i]}°C</p>
        <p>Min: ${tempsMin[i]}°C</p>
      `;
      forecastDiv.appendChild(div);
    }
  } catch (error) {
    console.error(error);
    forecastDiv.innerHTML = '<p>Failed to fetch weather data.</p>';
  }
}

function getWeatherIcon(code) {
  if ([0].includes(code)) return "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // clear
  if ([1, 2, 3].includes(code)) return "https://cdn-icons-png.flaticon.com/512/414/414825.png"; // partly cloudy
  if ([45, 48].includes(code)) return "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"; // fog
  if ([51, 53, 55, 56, 57, 61, 63, 65].includes(code)) return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"; // rain
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "https://cdn-icons-png.flaticon.com/512/642/642102.png"; // snow
  if ([80, 81, 82].includes(code)) return "https://cdn-icons-png.flaticon.com/512/3093/3093390.png"; // showers
  return "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // default sunny
}
