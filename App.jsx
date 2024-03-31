import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ItemTodo1 from "./components/ItemTodo1";
import ItemTodo2 from "./components/ItemTodo2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <AddToDo />

      <div className="items-container">
        <ItemTodo1 />
        <ItemTodo2 />
      </div>
    </center>
  );
}

export default App;
