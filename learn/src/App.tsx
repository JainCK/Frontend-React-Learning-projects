import Message from "./Message";
import ListGroup from "./componenets/ListGroup";
import "./App.css";

function App() {
  const items = ["New York", "San franciso", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
