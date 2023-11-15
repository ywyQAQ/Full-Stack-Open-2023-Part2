import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'
import Filter from './components/Filter'


const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])


  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, []);
  
  const handleFilterChange = (event)=> {
    setNewFilter(event.target.value)
    if(newFilter) {
      const regex = new RegExp(newFilter , 'i');
      const filterCountries = () => allCountries.filter(country => country.name.common.match(regex))
      setCountries(filterCountries)
      console.log(allCountries)
    }
  }

  return <>
    <Filter value={newFilter} onChange={handleFilterChange}/>
    <Content countries={countries} setCountries={setCountries}/>
  </>

  
}

export default App