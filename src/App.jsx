import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Country from './components/Country'
import './App.css'

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ])

  function handleDelete(countryID) {
    setCountries(countries.filter((c) => c.id !== countryID));
  }


  return (
    <>
      {countries.map((country) => (
        <Country key={country.id} id={country.id} name={country.name} gold={country.gold} onDelete={handleDelete} />
      ))}
    </>
  )
}

export default App
