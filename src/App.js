import React, { useState } from "react";
const api = {
  key: "002fc78680218d7154b13ac763cd7f41",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  

  return (
    <div className="App">
      <main>
        <div>
          <input
            type="text"
            placeholder="Location..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <div>
              <div>{weather.name}, {weather.sys.country}</div>
              <div>Date</div>
            </div>

            <div>
              <div>{Math.round(weather.main.temp * 9/5 + 32)}°F</div>
            </div>

            <div>Raining</div>
          </div>
        ) : (" ")}
      </main>
    </div>
  );
}

export default App;
