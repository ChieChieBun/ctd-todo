
import './App.css'

function App() {
  const todos = [
    {id:1, title: "Clean Room"},
    {id:2, title: "Do Homework"},
    {id:3, title: "Wash Hair"}
  ]
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
