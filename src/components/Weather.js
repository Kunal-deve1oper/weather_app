import React from 'react'

function Weather(props) {

  let date = new Date();

  let hour = date.getHours().toString();
  let min = date.getMinutes().toString();
  let sec = date.getSeconds().toString();

  return (
    <div>
      <div className='bottom-items'>
        <h1>{props.city}</h1>
        <h2>{date.toDateString()}</h2>
        <h2>{hour}:{min}:{sec}</h2>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='...'></img>
        <h2>{props.temperature}℃</h2>
        <h4>{props.category}</h4>
        <h5>{props.min}℃ | {props.max}℃</h5>
      </div>
    </div>
  )
}

export default Weather
