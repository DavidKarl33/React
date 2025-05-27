import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   function handleClick(event) {
        const button = event.target;
        const textElement = document.querySelector('p');
        const buttonText = button.innerText;
        let style = '';

        switch (buttonText) {
            case 'Bold':
                style = 'font-weight: bold;';
                break;
            case 'Italic':
                style = 'font-style: italic;';
                break;
            case 'Underline':
                style = 'text-decoration: underline;';
                break;
            case 'Fontsize 14px':
                style = 'font-size: 14px;';
                break;
            case 'Fontsize 18px':
                style = 'font-size: 18px;';
                break;
            case 'red':
                style = 'color: red;';
                break;
            case 'blue':
                style = 'color: blue;';
                break;
            case 'Green':
                style = 'color: green;';
                break;
            default:
                style = '';
        }
        textElement.setAttribute('style', style);
       
       
    }

 

  return (
    <>
    <div> 
      <h1>Text Styler</h1>
      <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 120px)',gap: '10px',width: '390px',margin: '0 auto'}}>
        <button onClick={(event)=> handleClick(event)}>Bold</button>
        <button onClick={(event)=> handleClick(event)}>Italic</button>
        <button onClick={(event)=> handleClick(event)}>Underline</button>
        <button onClick={(event)=> handleClick(event)}>Fontsize 14px</button>
        <button onClick={(event)=> handleClick(event)}>Fontsize 18px</button>
        <button onClick={(event)=> handleClick(event)}>Fontsize 24px</button>
        <button onClick={(event)=> handleClick(event)}>red</button>
        <button onClick={(event)=> handleClick(event)}>blue</button>
        <button onClick={(event)=> handleClick(event)}>Green</button>
      </div>

      <p>This is the text that will be styled based on the buttons you click.</p>

      
    </div>
    
    </>
  )
}

export default App
