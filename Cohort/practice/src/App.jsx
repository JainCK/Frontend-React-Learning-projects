import { useState } from "react"
import TodoApp from "./components/Todo";
import FetchTodo from "./components/FetchTodo";
function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is kuku" />
      <br />
      <TodoApp />
      <br />
      <FetchTodo />
    </div>
  )
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("my name is JK");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  function clear() {
    setFirstTitle("My name is JK")
  }

  return <>
    <button onClick={changeTitle}>Click me to change the title</button>
    <button onClick={clear}>Click me to clear</button>
    <Header title={firstTitle} />
  </>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App

