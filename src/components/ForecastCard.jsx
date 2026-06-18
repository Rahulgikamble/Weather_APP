function ForecastCard({ forecast }) {
  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>

      <div className="forecast-cards">
        {forecast.map((day, index) => (
          <div className="forecast-card" key={index}>
            <h3>{day.date}</h3>

            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
            />

            <p>{day.day.avgtemp_c}°C</p>

            <p>{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastCard;