import { useState } from 'react'
import { useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Country from './components/Country'
import './App.css'

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  const [showAddMenu, setShowAddMenu] = useState(false);
  const [newCountryName, setNewCountryName] = useState("");
  const nextId = useRef(4);


  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  function handleDelete(countryID) {
    setCountries(countries.filter((c) => c.id !== countryID));
  }

  function decrease(countryID, medal){
    const countriesMutable = [...countries];

    const idx = countriesMutable.findIndex((c) => countryID == c.id);

    if (countriesMutable[idx][medal] <= 0) return;

    countriesMutable[idx][medal] -= 1;

    setCountries(countriesMutable);
  }

  function increase(countryID, medal){
    const countriesMutable = [...countries];

    const idx = countriesMutable.findIndex((c) => countryID == c.id);
    const medalNum = countriesMutable[idx][medal] += 1;

    setCountries(countriesMutable);
  }

  function allMedal(){
    const goldCount = countries.reduce((a, b) => a + b.gold, 0);
    const silverCount = countries.reduce((a, b) => a + b.silver, 0);
    const bronzeCount = countries.reduce((a, b) => a + b.bronze, 0);

    return goldCount + silverCount + bronzeCount;
  }

  function addCountry(e) {
    e.preventDefault();
    if (!newCountryName.trim()) return;

    setCountries([
      ...countries,
      { id: nextId.current, name: newCountryName, gold: 0, silver: 0, bronze: 0 },
    ]);
    nextId.current += 1;
    setNewCountryName("");
    setShowAddMenu(false);
  }

  return (
    <div>
      <h1>Olympic Medals: {allMedal()}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.id} id={country.id} name={country.name} onDelete={handleDelete} medals={medals.current} country={country} onDecrease={decrease} onIncrease={increase} />
        ))}
      </div>

      <div>
        <button onClick={() => setShowAddMenu(!showAddMenu)}>+ Add Country</button>
        {showAddMenu && (
          <form onSubmit={addCountry}>
            <input
              type="text"
              value={newCountryName}
              onChange={(e) => setNewCountryName(e.target.value)}
              placeholder="Country name"
              autoFocus
            />
            <button type="submit">Add</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
