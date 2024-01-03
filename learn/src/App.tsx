import Message from "./Message";
import ListGroup from "./componenets/ListGroup";
import "./App.css";

function App() {
  const items = ["New York", "San franciso", "Tokyo", "London", "Paris"];
  return (
    <div>
      <Message />
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
