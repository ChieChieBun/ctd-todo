 function TodoList() {

  const todos = [
    {id:1, title: "Clean Room"},
    {id:2, title: "Do Homework"},
    {id:3, title: "Wash Hair"}
  ]
  return(
  <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
  )
 }

 export default TodoList
