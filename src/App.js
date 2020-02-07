import React, { useState } from 'react';
import './App.css';
import Todotable from './Components/TodoTable';
import Todolist from './Components/TodoList';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const handleClick = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);//add a new value at the end of the array
  }

  const handleDelete = (index) => {
    setTodos(todos.filter(i => i !== index));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>ToDoList</p>
      </header>
      <p></p>
      <Todolist todo={todo} todos={todos} handleChange={handleChange} handleClick={handleClick}/>
      <p></p>
      <Todotable todos={todos} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
