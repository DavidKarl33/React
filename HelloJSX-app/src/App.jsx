import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const greeting = " Hello JSX ";
  const year = 2025;
  const name =" React Developer's "


  return (
    <>
      <div>
         <h1>{greeting} Welcometo the {name} Journey in {year}</h1>
       </div>
    </>
  )
}

export default App
