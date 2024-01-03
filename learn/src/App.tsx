import Message from "./Message";
import ListGroup from "./componenets/ListGroup";
import "./App.css";
import Alert from "./componenets/Alert";
import Button from "./componenets/Button";

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
      <Alert>
        Hello <span> World</span>
      </Alert>
      <Button>My Button</Button>
    </div>
  );
}

export default App;
