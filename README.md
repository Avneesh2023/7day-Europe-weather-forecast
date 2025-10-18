# European 7-Day Weather Forecast Web App

This project is a simple web application that displays a **7-day weather forecast** for major European cities using the free **7Timer! API**.  
The app automatically updates when a city is selected and includes weather icons that match the forecast (☀️, ☁️, 🌧️, ❄️).
---

## Features
- Automatic forecast updates when you change the selected city (no button required)
- 7-day forecast view with date, temperature, and condition
- Icons change dynamically based on the weather
- Clean, modern interface built with HTML, CSS, and JavaScript
- No API key required — uses 7Timer! open API
---
## Technologies Used
- **HTML5** – Page structure  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Fetch API, DOM manipulation  
- **7Timer! API** – External weather data source  

API Endpoint Example:
```
https://www.7timer.info/bin/api.pl?lon=2.35&lat=48.85&product=civil&output=json
```
---

---

## Weather Icon Mapping
| Condition    | Icon Description           |
|------------  |------------------          |
| clear        | sunny | ☀️ Sun            |
| cloudy       | partly cloudy | ☁️ Clouds |
| rain         | lightrain | 🌧️ Rain       |
| snow         | ❄️ Snow                   |
| thunderstorm | ⚡ Thunder                |
| shower       | 🌦️ Light Rain             |
All icons are loaded from **Flaticon CDN** (no local images needed).

---

## ⚙️ How to Run
1. **Download** or clone this repository.  
2. Unzip the project (if needed).  
3. Open the `index.html` file in your web browser.  
4. Select a city — the forecast loads automatically!

---

## 🌍 Supported Cities
- Paris 🇫🇷  
- Rome 🇮🇹  
- Berlin 🇩🇪  
- London 🇬🇧  
- Madrid 🇪🇸  
- Stockholm 🇸🇪  
- Athens 🇬🇷  

---

**Developed by:** Avneesh Pandey
**API Source:** [7Timer! Weather API](http://www.7timer.info/doc.php)
