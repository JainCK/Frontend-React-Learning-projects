
import React from "react"
import './index.css'

function App() {


  return (
    <>
     <div className="max-w-md mx-auto bg-zinc-600 shadow-md overflow-hidden rounded-md ">
      <div className="bg-blue-400 p-4 text-white flex justify-center">
        <h2 className="text-2xl font-semibold ">Hi, I am jain</h2>
      </div>
      <div className="p-4 flex justify-center">
        <p className="text-white">
          A full stack developer from India!!
        </p>
      </div>
      <div className="p-8 flex justify-center space-x-4">
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <i className="fab fa-facebook-square text-5xl"></i>
        </a>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-600 transition duration-300"
        >
          <i className="fab fa-twitter-square text-5xl"></i>
        </a>
        <a
          href="#"
          className="text-red-500 hover:text-red-700 transition duration-300"
        >
          <i className="fab fa-instagram-square text-5xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jain-c-kuriakose/
          "
          className="text-blue-700 hover:text-blue-900 transition duration-300"
        >
          <i className="fab fa-linkedin text-5xl"></i>
        </a>
      </div>
    </div>
    </>
  )
}

export default App
