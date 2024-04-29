import { useState } from 'react'

import './App.css'



function App() {
  const [place, setPlace] = useState('')
  const [weather, setWeather] = useState({})

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeather = async () => {
    
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`)
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      console.log(error)
    }
  }
  
 
  return (
    <div className='container'>
      <h1 className='name'>Weather App</h1>
      <input className='input' type="text" placeholder="Enter city name" value={place} onChange={(e) => setPlace(e.target.value)} />
      <button onClick={getWeather}>Get Weather</button>
      <div>
        {weather.main && (
          <div className='info'>
            <h2>{weather.name}</h2>
            <h3>{weather.main.temp} c</h3>
            <h3>{weather.main.temp_min} c / {weather.main.temp_max} K</h3>
            <h3>{weather.weather[0].description}</h3>
          </div>
        )}
      </div>
    </div> 
  )
}

export default App


