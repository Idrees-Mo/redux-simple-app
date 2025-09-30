import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}
    >
      <h2>Redux Todo App</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
