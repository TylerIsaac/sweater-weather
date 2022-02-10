import React, { useState } from "react";
import "./app.css";

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
    <main className="bg-img">
      <div className="">
        <div className=" mx-4 my-4 box blur">
          <div>
            <input
              className="input is-rounded column is-half"
              type="text"
              placeholder="Location..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              required
            />
          </div>
        </div>
      </div>

      <div className="">
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="mx-6 my-4 box bg-blue has-text-centered overlay">
              <div className="is-size-6 has-text-black">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="is-size-6 has-text-black">Date</div>
            </div>

            <div className=" mx-4 mt-6 box blur has-text-centered">
              <div className="columns">
                <div className="column temp has-text-weight-bold">
                  {Math.round((weather.main.temp * 9) / 5 + 32)}°F
                </div>
                <img
                  className="column"
                  src="https://i.imgur.com/n28CWGf.png"
                  alt="storm-cloud"
                  width="50%"
                />
              </div>

              <div>Raining</div>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </main>
  );
}

export default App;
