import { useContext } from "react"
import { CountContext } from "./context";



function App() {
 

  return (
    <div>
        <Count />
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = 0;
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = 0;
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
