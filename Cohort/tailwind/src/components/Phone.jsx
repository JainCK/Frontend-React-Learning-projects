import React from 'react'
import { useState } from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '../App.css'


const Phone = () => {
    const [ph, setPh] = useState()
  return (
    <section className='bg-black flex items-center justify-center h-screen'>
    <div className='w-80 flex flex-col gap-4 p-4 border-2 border-solid border-white rounded'>
    <label
    htmlFor=""
    className="font-bold text-xl text-white text-center">
    Verify your phone number
    </label>
    <PhoneInput country={"in"} value={ph} onChange={setPh} />
        <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
          <span>send OTP</span>
        </button>
    </div>
</section>

  )
}

export default Phone