import { useContext } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selectors/evenSelector";



function App() {
 

  return (
    <div>
      <RecoilRoot >
        <Count />
        </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("Rendered");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}

    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer () {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    { isEven ? "it is even" : "it is odd"}
  </div>
}

function Buttons() {
  const  setCount  = useSetRecoilState(countAtom) ;
  console.log("render vbtns");
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
