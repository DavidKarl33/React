import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const currentTime = new Date().getHours();

  const greeting = currentTime >= 5 && currentTime < 12 ? "Good Morning" :
    currentTime >= 12 && currentTime < 17 ? "Good Afternoon" : "Good Evening";
  
  return (
    <div className="App">
      <h1>{greeting}!</h1>
      <p>The current hour is : {currentTime}</p>
    </div>
  );
  
}

export default App
