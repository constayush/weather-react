import React, { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'
import { useEffect } from 'react'

function App() {

  const [currentData, setCurrentData] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [currentWeather, setCurrentWeather] = useState(0);
  const [currentHumidity, setCurrentHumidity] = useState(0);
  const [currentWind, setCurrentWind] = useState(0);
  const [currentHourly, setCurrentHourly] = useState(0);
  const [currentHourlyTime, setCurrentHourlyTime] = useState(0);
  const [HourlyTimeStr, setHourlyTime] = useState(0);
  const [daysTemp, setDaysTemp] = useState(0);
  let [data, setData] = useState(0);

  useEffect(() => {

    async function loco() {

      let latitude, longitude;
      navigator.geolocation.getCurrentPosition((position) => {

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max&timezone=auto`;
        weatherDetails(weatherApi);

      });
    }
    loco();
  }, []);


  const weatherDetails = async (weatherApi) => {
    let res = await fetch(weatherApi);
    data = await res.json();


    setCurrentData(data);
    setCurrentWeather(data.current.temperature_2m);
    setCurrentHumidity(data.current.relative_humidity_2m);
    setCurrentWind(data.current.wind_speed_10m);
    setCurrentTime(Number(data.current.time.split('T')[1].split(':')[0]));
    setCurrentHourly(data.hourly.temperature_2m);
    setCurrentHourlyTime(data.hourly.time);
    setDaysTemp(data.daily.temperature_2m);

  };

  return (
    <div className=' wrapper w-screen h-fit lg:h-screen flex flex-col lg:flex-row justify-center items-center gap-[1rem] p-[2rem] '>

      <WeatherCard data={data} DaysTemp={daysTemp} currentWind={currentWind} HourlyTimeStr={HourlyTimeStr} currentHourlyTime={currentHourlyTime} currentTime={currentTime} currentData={currentData} currentHourly={currentHourly} currentWeather={currentWeather} currentHumidity={currentHumidity} />

      <ForecastCard data={data} />

    </div>
  )
}

export default App;