function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>{weather.location.name}</h2>

      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />

      <h1>{weather.current.temp_c}°C</h1>

      <h3>{weather.current.condition.text}</h3>

      <p>Humidity: {weather.current.humidity}%</p>

      <p>Wind Speed: {weather.current.wind_kph} km/h</p>
    </div>
  );
}

export default WeatherCard;