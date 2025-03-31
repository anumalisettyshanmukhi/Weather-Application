import React, { useEffect, useState } from 'react'
 import './Weather.css'
 import axios from 'axios'
 const API_KEY='q3vj8nb4jznUJ9xuCn8G1acY5rxNlgNp'
 function Weather() {
     const[city,setCity]=useState('')
     const[weatherData,setWeatherData]=useState(null)
     const[error,setError]=useState(null)
     // console.log(weatherData)
 useEffect(()=>{
     fetchWeatherByGeolocation()
 },[])
     const fetchWeatherByGeolocation= async()=>{
         try{
             //get users' current position using geolocation api
             navigator.geolocation.getCurrentPosition(async (position)=>{
                                const{latitude,longitude}=position.coords
                     let response =await axios.get(
 `https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=${API_KEY}`                 
                                )
                                setWeatherData(response.data)
                                setError(null)
             })
         }
         catch(error){
             setError("Failed to fetch weather data")
             setWeatherData(null)
         }
     }
     let handleLocationSubmit=async ()=>{
                    try{
  let response=await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${API_KEY}`)
                 //    console.log(response.data)
                 setWeatherData(response.data)
                 setError(null)
                    }
                    catch(error){
                     // console.log("error while fecthing")
                     setError("Failed to fetch weather data")
                     setWeatherData(null)
                    }
     }
  
   return (
     <div className='container'>
       <h1 className='title'>Search Weather Condition</h1>
       <div className='inputContainer'>
 <input type='text' placeholder='Enter city name' 
 value={city}  onChange={(e)=>setCity(e.target.value)}
 className='input'/>
 <button className='button' onClick={handleLocationSubmit}
 >Search</button>
       </div>
       {error&&<p className='error'>{error}</p>}
       {weatherData&&(
         <div className='weatherContainer'>
 
             <h2 className='subtitle'>{weatherData.location.name}</h2>
             <p className='temperature'> Temperature: {weatherData.data.values.temperature} <sup>o</sup>C</p>
             <p className='humidity'>Humidity: {weatherData.data.values.humidity}</p>
             <p className='windSpeed'>Wind Speed:{weatherData.data.values.windSpeed}</p>
             </div>
       )}
     </div>
   )
 }
 
 export default Weather