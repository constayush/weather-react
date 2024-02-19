import React from 'react'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'

function App() {
  return (

    
    <div className=' wrapper w-screen h-fit lg:h-screen flex flex-col lg:flex-row justify-center items-center gap-[1rem] p-[2rem] '>

      <WeatherCard />

      <ForecastCard />

    </div>
  )
}

export default App