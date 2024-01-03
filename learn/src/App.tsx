import Message from "./Message";
import ListGroup from "./componenets/ListGroup";
import "./App.css";
import Alert from "./componenets/Alert";
import Button from "./componenets/Button";
import { useState } from "react";

function App() {
  const items = ["New York", "San franciso", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisible] = useState(false);

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
      {alertVisible && <Alert>My Alert</Alert>}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
