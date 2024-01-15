import Dashboard from './Componenets/Dashboard'
import Landing from './Componenets/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={Dashboard} />
        <Route path='/' element={Landing} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
