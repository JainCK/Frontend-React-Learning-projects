import { useState } from 'react'
import './App.css'
import Otp from './components/Otp'
import Phone from './components/Phone'


function App() {
  const [showOTP, setShowOTP] = useState(false);
  return (
    <>
    {showOTP ? (
    <Otp /> 
     ) : (       
    <Phone />
    )
}
    </>
  )
}

export default App
