import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const numbers = [42,7,13,100,15];


  const numberList = numbers.map((number, index) => (
    <li key={index}>
      {number}
    </li>
  ));

  return (
    <>
     <ol>{numberList}</ol>
    </>
  )
}

export default App
