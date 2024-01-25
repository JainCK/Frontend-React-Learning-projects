import React from 'react'
import { useState } from "react"
import OTPInput from "otp-input-react"
import '../App.css'


const Otp = () => {
    const [otp, setOtp] = useState()
  return (
    <section className='bg-black flex items-center justify-center h-screen'>
      <div className='w-80 flex flex-col justify-center gap-4 p-4 border-2 border-solid border-white rounded'>
        <label htmlFor="ph" className='font-bold text-2xl text-white text-center'>Enter OTP</label>
          <OTPInput OTPLength={6} 
          value={otp}
          onChnage={setOtp}
          otpType = "number"
          disabled={false}
          autoFocus
          className="ml-5 justify-center"
          ></OTPInput>
          <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
            <span>Verify</span>
          </button>
      </div>
</section>
  )
}



export default Otp
