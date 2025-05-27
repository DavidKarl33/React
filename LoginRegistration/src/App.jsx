import logoimg from './assets/D.png'
import './App.css'
import Logo from './components/Logo.jsx'
import LoginForm from './components/Login.jsx'
import RegistrationForm from './components/Registration.jsx'



function App() {
  return (
      <div className="container">
        
      <div className="left-panel">
        <Logo img={logoimg} alt="Logo" className="logo-image" />
        <p className="intro-text">
          Meet ArrowSmiley  your cheerful green guide! Explore features with a smile 😊
        </p>
      </div>

      <div className="right-panel">
      <LoginForm />
     <RegistrationForm />
      </div>
    </div>
  );
}

export default App
