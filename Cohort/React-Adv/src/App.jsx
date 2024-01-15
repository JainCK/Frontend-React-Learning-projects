import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

const Dashboard = lazy(() => import('./Componenets/Dashboard') )
const Landing = lazy (() => import('./Componenets/Landing' ))


function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback= {"Loading..."}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback= {"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
  <button onClick ={() => {
      navigate('/');
  }}>Landing</button>
  <button onClick ={() => {
    navigate("/dashboard");
  }}>Dashboard</button>
</div>
}

export default App
