import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

      function handleClick(event) {
        const buttonText = event.target.innerText;
        alert(`You clicked "${buttonText}"`); 
    }

    
    return (    
        <>
            <button onClick={(event) => handleClick(event)}>Hi</button>
             <button onClick={(event) => handleClick(event)}>Hello</button>
              <button onClick={(event) => handleClick(event)}>Bye</button>
        </>
    );
}

export default App
