import React from 'react'
import SunnyImg from '../../public/images/clear.png'
import windIcon from '../../public/images/windIcon.svg'
import humidityIcon from '../../public/images/humidityIcon.svg'
import { useEffect } from 'react'
import { useState } from 'react'

function WeatherCard() {

  const [currentData, setCurrentData] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [currentWeather, setCurrentWeather] = useState(0);
  const [currentHumidity, setCurrentHumidity] = useState(0);
  const [currentWind, setCurrentWind] = useState(0);
  const [currentHourly, setCurrentHourly] = useState(0);
  const [currentHourlyTime, setCurrentHourlyTime] = useState(0);
  const [HourlyTimeStr, setHourlyTime] = useState(0);


  //   let latitude, longitude;


  // async function loco (){

  //  navigator.geolocation.getCurrentPosition((position) =>{



  //   latitude = position.coords.latitude;
  //   longitude = position.coords.longitude;

  //   });}


  // loco()

  //   console.log(latitude,longitude)


  //   const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max`;


  //   const weatherDetails = async () => {


  //     let res = await fetch(weatherApi)
  //     let resObj = await res.json()

  //     console.log(resObj)

  //   }

  //   weatherDetails()











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
    let data = await res.json();




    setCurrentData(data);
    setCurrentWeather(data.current.temperature_2m);
    setCurrentHumidity(data.current.relative_humidity_2m)
    setCurrentWind(data.current.wind_speed_10m);
    setCurrentTime(Number(data.current.time.split('T')[1].split(':')[0]))
    setCurrentHourly(data.hourly.temperature_2m)
    setCurrentHourlyTime(data.hourly.time)

  };
  // console.log(String(currentHourlyTimeStr[currentTime+6]).split("T")[1])










  return (



    <div className='mainWeatherCard w-[18rem] lg:w-[50rem] h-fit lg:h-[32.5rem] flex flex-col justify-center items-center gap-[1rem] rounded-lg'>




      <div className='weatherDetailsSec w-full h-[50%] glass rounded-lg flex justify-between items-center p-[2rem] gap-3 lg:gap-0 lg:p-[6rem] '>


        <img src={SunnyImg} className='weatherImg  w-[5rem] lg:w-[12rem]' />

        <h1 className='text-[4rem] lg:text-[7rem]'>{Math.round(currentWeather)}°c</h1>


      </div>



      <div className='weatherOnTimeSec w-full h-[30%] glass flex justify-between rounded-lg p-[1rem] lg:p-[2rem] text-[.9rem] lg:text-[1.5rem]    ' >


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{currentTime + 1}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 1])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{currentTime + 2}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 2])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{currentTime + 3}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 3])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{currentTime + 4}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 4])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{currentTime + 5}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 5])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{currentTime + 6}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem]  font-semibold dimText'>{Math.round(currentHourly[currentTime + 6])}°c</h1></div>
      </div>




      <div className='weatherSubDetailsSec w-full h-[20%] flex justify-center items-center gap-[1rem]'>


        <div className='w-[50%] h-full glass rounded-lg lg:p-[2rem] text-[1.1rem] lg:text-[1.3rem] flex flex-col lg:flex-row justify-between items-center '>


          <h1>wind speed</h1>
          <div className='flex '>
            <img src={windIcon} />
            <h1>{currentWind}km/h</h1>
          </div>
        </div>



        <div className='w-[50%] h-full glass rounded-lg lg:p-[2rem] text-[1.1rem] lg:text-[1.3rem] flex flex-col lg:flex-row justify-between items-center'>

          <h1>humidity</h1>
          <div className='flex '>
            <img src={humidityIcon} />
            <h1>{currentHumidity}%</h1>
          </div>

        </div>



      </div>


    </div>
  )
}

export default WeatherCard