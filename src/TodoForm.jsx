import { useRef } from "react";
import { useState } from "react";

function TodoForm({onAddTodo}){
  const [workingTodoTitle, setWorkingTodo] = useState("");
  const todoTitleInput = useRef("");

  function handleAddTodo(event){
  event.preventDefault();
  onAddTodo(workingTodoTitle);
  todoTitleInput.current.focus();
  setWorkingTodo("");
  }


  return(

    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input type="text" id="todoTitle" name="title" ref={todoTitleInput} value={workingTodoTitle} onChange={(e)=>setWorkingTodo(e.target.value)}></input>
      <button type="submit" disabled = {workingTodoTitle==="" ? true:false} >Add Todo</button>
    </form>

  )
}

export default TodoForm
