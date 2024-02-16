import React from 'react'
import SunnyImg from '../../public/images/clear.png'
import windIcon from '../../public/images/windicon.svg'
import humidityIcon from '../../public/images/humidityIcon.svg'



function WeatherCard() {
  return (
    <div className='mainWeatherCard w-[20rem] lg:w-[50rem] h-[32.5rem] flex flex-col justify-center items-center gap-[1rem] rounded-lg'>




      <div className='weatherDetailsSec w-full h-[50%] glass rounded-lg flex justify-between items-center p-[2rem]  lg:p-[4rem] '>


        <img src={SunnyImg} className='weatherImg  w-[5rem] lg:w-[15rem]' />

        <h1 className='text-[4rem] lg:text-[10rem]'>10°c</h1>


      </div>



      <div className='weatherOnTimeSec w-full h-[30%] glass flex justify-between rounded-lg p-[1rem] lg:p-[2rem] text-[1.1rem] lg:text-[1.5rem]   ' >


<div className='flex flex-col justify-center items-center font-normal'><p className=''>1pm</p><h1>0°c</h1></div>
<div className='flex flex-col justify-center items-center font-normal'><p className=''>1pm</p><h1>0°c</h1></div>
<div className='flex flex-col justify-center items-center font-normal'><p className=''>1pm</p><h1>0°c</h1></div>
<div className='flex flex-col justify-center items-center font-normal'><p className=''>1pm</p><h1>0°c</h1></div>
<div className='flex flex-col justify-center items-center font-normal'><p className=''>1pm</p><h1>0°c</h1></div>
<div className='flex flex-col justify-center items-center font-normal'><p className=''>1pm</p><h1>0°c</h1></div>
      </div>




      <div className='weatherSubDetailsSec w-full h-[20%] flex justify-center items-center gap-[1rem]'>


        <div className='w-[50%] h-full glass rounded-lg lg:p-[2rem] text-[1.1rem] lg:text-[1.3rem] flex flex-col lg:flex-row justify-between items-center '>
        
        
        <h1>wind speed</h1>
          <div className='flex '>
            <img src={windIcon} />
            <h1>0km/h</h1>
          </div>
        </div>



        <div className='w-[50%] h-full glass rounded-lg lg:p-[2rem] text-[1.1rem] lg:text-[1.3rem] flex flex-col lg:flex-row justify-between items-center'>

        <h1>humidity</h1>
          <div className='flex '>
            <img src={humidityIcon} />
            <h1>0%</h1>
          </div>
          
        </div>



      </div>


    </div>
  )
}

export default WeatherCard