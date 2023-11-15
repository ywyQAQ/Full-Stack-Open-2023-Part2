import { useState, useEffect } from 'react'
import axios from 'axios'


const api_key = process.env.REACT_APP_API_KEY;


const Country = ({country}) => {
    
    const [weather, setWeather] = useState(null)
    const [icon, setIcon] = useState('')
    useEffect(()=>{
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
            .then(response => {
                setWeather(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [country.capital])
   if (weather){
    return <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <p></p>
        <h2>languages:</h2>
        <ul>
            {Object.entries(country.languages).map(([short, full])=> <li key={short}>{full}</li>)}
        </ul>
        <img src={country.flags.svg}/>
        <h2>Weather in {country.capital}</h2>
        <p>temperature {(weather.main.temp-273.15).toFixed(2)} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
        <p>wind {weather.wind.speed} m/s</p>
    </>
   }

    return <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <p></p>
        <h2>languages:</h2>
        <ul>
            {Object.entries(country.languages).map(([short, full])=> <li key={short}>{full}</li>)}
        </ul>
        <img src={country.flags.svg}/>
    </>    
}


export default Country;
