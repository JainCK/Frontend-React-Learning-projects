import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navigation";
import TaskList from "./Components/TaskList";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <TaskList />
      <Dashboard />
    </>
  );
}

export default App;
