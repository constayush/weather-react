import React from 'react'
import searchIcon from '../../public/images/searchIcon.svg'
import { useState } from 'react'

function ForecastCard({ data, daysTemp }) {

  return (
    <div className='mainWeatherCard w-[18rem] lg:w-[30rem] h-[32.5rem] glass rounded-lg p-4'>

      <div className='flex flex-col gap-[1rem] w-full h-full p-0'>

        <div className='searchbar w-full glassBlack h-[10%] rounded-lg flex '>

          <input placeholder='Search for your city' className='w-full rounded-lg searchFeild' type='text'></input>

          <img className='w-[2.5rem] m-[1rem]' src={searchIcon} />

        </div>

        <div className='w-full h-[17%] glassdark rounded-lg flex justify-between p-4 text-[1.3rem]'><h1>friday</h1> <h1>{daysTemp}c</h1></div>

        <div className='w-full h-[17%] glassdark rounded-lg flex justify-between p-4 text-[1.3rem]'><h1>friday</h1> <h1>{daysTemp}c</h1></div>

        <div className='w-full h-[17%] glassdark rounded-lg flex justify-between p-4 text-[1.3rem]'><h1>friday</h1> <h1>{daysTemp}c</h1></div>

        <div className='w-full h-[17%] glassdark rounded-lg flex justify-between p-4 text-[1.3rem]'><h1>friday</h1> <h1>{daysTemp}c</h1></div>

        <div className='w-full h-[17%] glassdark rounded-lg flex justify-between p-4 text-[1.3rem]'><h1>friday</h1> <h1>{daysTemp}c</h1></div>

      </div>

    </div>

  )
}

export default ForecastCard