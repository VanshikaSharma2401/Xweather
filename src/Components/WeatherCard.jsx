import React from 'react'

const WeatherCard = ({title,value}) => {
  return (
    <div className='weather-card'>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default WeatherCard
