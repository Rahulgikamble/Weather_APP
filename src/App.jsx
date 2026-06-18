import { useState } from "react";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "dc0279578f044c54a6270952261106";

  async function getWeather() {
    if (!city) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes`
      );

      setWeather(response.data);
      setForecast(response.data.forecast.forecastday);
    } catch (error) {
      alert("City not found");
      setWeather(null);
      setForecast([]);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        getWeather={getWeather}
      />

      {loading && <Loader />}

      {weather && <WeatherCard weather={weather} />}

      {forecast.length > 0 && (
        <ForecastCard forecast={forecast} />
      )}

      <Footer />
    </div>
  );
}

export default App;