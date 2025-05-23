https://github.com/user-attachments/assets/699feb69-3f4c-4ebc-af94-66960fe33afd
# 🌦️ Dynamic Weather App

A responsive and visually engaging Weather App built with **Vite + React**, integrating **Google Places API** for place autocomplete and **OpenWeatherMap API** for real-time weather data. The app features dynamic icons, background videos, and color-changing UI elements that adapt based on weather conditions and user searches.

---

## 🔍 Features

- 🌐 **Google Places Autocomplete**  
  Enter any city name with smart autocomplete suggestions powered by the Google Places API.

- ☀️ **Real-Time Weather Data**  
  Fetches accurate and up-to-date weather data (temperature, humidity, description, etc.) using OpenWeatherMap API.

- 🎨 **Randomized Info Box Colors**  
  The weather information box changes to a random color on every new search, adding visual variety.

- 🌡️ **Temperature-Based Icons**  
  Displays a weather-representative icon next to the city name based on the temperature range:
  - ☀️ Summer for ≥30°C
  - 🌤️ Sunny for 20°C–30°C
  - 🌬️ Cool for 10°C–20°C
  - ❄️ Cold for ≤10°C

- 🎥 **Dynamic Background Videos**  
  Weather description (e.g., rain, clear, snow) triggers a background video that reflects the current condition visually.

---

## 🛠 Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **APIs**:
  - [Google Places API](https://developers.google.com/maps/documentation/places/web-service/autocomplete)
  - [OpenWeatherMap API](https://openweathermap.org/api)
- **Styling**: CSS Modules / MUI (if used)
- **State Management**: React `useState`, `useEffect`, `useRef`

---

## 🚀 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root with the following:
   ```env
   VITE_OpenWeather_API_Key=your_openweather_api_key
   VITE_Google_API_Key=your_google_places_api_key
   ```

4. **Run the app locally:**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure (Simplified)

```
src/
├── assets/                # Weather videos (rain.mp4, sunny.webm, etc.)
├── components/
│   ├── SearchCard.jsx     # City input form with Google Autocomplete
│   └── WeatherCard.jsx    # Displays weather info and icon
├── App.jsx
├── WeatherApp.jsx         # Main logic for state and data fetching
└── utils/
    ├── getWeatherImage.js # Maps weather descriptions to video
    └── getWeatherData.js  # Fetches data from OpenWeatherMap
```

---

## 🎨 Visual Demo


---

## 💡 Author

Built by **Ashrarul Haque**  
🔗 [GitHub](https://github.com/ashrarulhaque) | 💼 [LinkedIn](https://www.linkedin.com/in/ashrarul)
