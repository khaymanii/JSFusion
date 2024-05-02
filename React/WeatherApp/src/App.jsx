import { useState } from 'react'

import './App.css'



function App() {
  const [place, setPlace] = useState('')
  const [weather, setWeather] = useState({})

  const API_KEY = "73fdedba8119f2391c6848c0167c70ee";

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
            <h3>{weather.main.temp_min} C / {weather.main.temp_max} C</h3>
            <h3>{weather.weather[0].description}</h3>
          </div>
        )}
      </div>
    </div> 
  )
}

export default App


