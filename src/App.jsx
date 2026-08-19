import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Country from './components/Country'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1><Country/></h1>
    </>
  )
}

export default App
