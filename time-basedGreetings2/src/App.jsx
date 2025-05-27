import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import morning from './assets/morning.gif'
import afternoon from './assets/afternoon.gif'
import evening from './assets/evening.gif'

function App() {
   const currentHour = new Date().getHours();

  const greeting = currentHour >= 5 && currentHour < 12 ? 'Good Morning'
  : currentHour >= 12 && currentHour < 17? 'Good Afternoon': 'Good Evening';

  const imageSrc = currentHour >= 5 && currentHour < 12 ? morning
      : currentHour >= 12 && currentHour < 17 ? afternoon: evening;

  return (
    <div>
      <h1>{greeting}</h1>
      <img src={imageSrc} alt={greeting} />
    </div>
  );
}

export default App
