import Dashboard from './Componenets/Dashboard'
import Landing from './Componenets/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <div>
      <div>
        <button onClick ={() => {
            window.location.href = "/";
        }}>Landing</button>
        <button onClick ={() => {
          window.location.href = "/dashboard";
        }}>Dashboard</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
