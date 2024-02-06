import React, { useState } from "react";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

//class componenet
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

// funtional componenets

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

{
  /* import TodoApp from "./components/Todo";
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

*/
}

export default App;
