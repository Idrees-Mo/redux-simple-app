import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Vite", completed: false },
    { id: 3, text: "Build a Todo App", completed: false },
  ];

  return (
    <>
      <h1>hello worlds</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                // handle checkbox change
              }}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
