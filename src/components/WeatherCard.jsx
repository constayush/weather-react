import React from 'react'
import SunnyImg from '../../public/images/clear.png'
import windIcon from '../../public/images/windIcon.svg'
import humidityIcon from '../../public/images/humidityIcon.svg'
import { useEffect } from 'react'
import { useState } from 'react'

function WeatherCard({ HourlyTimeStr, currentWind, currentHourlyTime, currentData, currentHourly, currentWeather, currentHumidity, currentTime }) {

  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  
// console.log(currentHourlyTime[0].split('T')[1].split(':')[0])

  let arr = [];



  function getHours() {

    // for (let i = 0; i < currentHourlyTime.length; i++) {
    //   if (hours + 1 == currentHourlyTime[0].split('T')[i].split(':')[0]) {

    //     arr.push(currentHourlyTime[0].split('T')[i].split(':')[0])
    //     arr.push(currentHourlyTime[0].split('T')[i + 1].split(':')[0])
    //     arr.push(currentHourlyTime[0].split('T')[i + 2].split(':')[0])
    //     arr.push(currentHourlyTime[0].split('T')[i + 3].split(':')[0])
    //     arr.push(currentHourlyTime[0].split('T')[i + 4].split(':')[0])

    //     console.log(arr)
    //   }

    // }

  }


getHours()























  function today() {

    if (day == 1) {

      return "monday"
    }
    if (day == 2) {

      return "tuesday"
    }
    if (day == 3) {

      return "wednesday"
    }
    if (day == 4) {

      return "thrusday"
    }
    if (day == 5) {

      return "friday"
    }
    if (day == 6) {

      return "saturday"
    }
    if (day == 7) {

      return "sunday"
    }

  }


  return (
    <div className='mainWeatherCard w-[18rem] lg:w-[50rem] h-fit lg:h-[32.5rem] flex flex-col justify-center items-center gap-[1rem] rounded-lg'>

      <div className='weatherDetailsSec w-full h-[50%] glass rounded-lg flex justify-between items-center p-[2rem] gap-3 lg:gap-0 lg:p-[6rem] '>

        <img src={SunnyImg} className='weatherImg  w-[5rem] lg:w-[12rem]' />

        <div className='flex flex-col justify-center text-nowrap  items-end'>

          <p className='text-[.9rem] lg:text-[1.2rem]'>{hours}:{minutes},  {today()}</p>

          <h1 className='text-[4rem] lg:text-[7rem]'>{Math.round(currentWeather)}°c</h1>

        </div>

      </div>

      <div className='weatherOnTimeSec w-full h-[30%] glass flex justify-between rounded-lg p-[1rem] lg:p-[2rem] text-[.9rem] lg:text-[1.5rem]    ' >


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{hours + 1}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 1])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{hours + 2}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 2])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{hours + 3}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 3])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{hours + 4}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 4])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{hours + 5}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem] font-semibold dimText'>{Math.round(currentHourly[currentTime + 5])}°c</h1></div>


        <div className='flex flex-col justify-center items-center font-normal'><p className=''>{hours + 6}:00</p><h1 className='text-[.75rem] lg:text-[1.25rem]  font-semibold dimText'>{Math.round(currentHourly[currentTime + 6])}°c</h1></div>

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