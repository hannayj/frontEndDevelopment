import React, { useState } from 'react';
import './App.css';
//import Todotable from './Components/TodoTable';
import Todolist from './Components/TodoList';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const handleClick = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const handleDelete = (event) => {
    event.preventDefault();
    setTodos(todos.filter((todo, index) => index !== parseInt(event.target.id)));
  }

  const columns = [
    {
        Header: 'Date',
        accessor: 'date'
    },
    {
        Header: 'Descripton',
        accessor: 'desc'
    },
    {
      Cell: ({index}) => <button id={index} onClick={handleDelete}>Delete</button>,
      filterable: false,
      sortable: false,
      width: 120
    }
]

  return (
    <div className="App">
      <header className="App-header">
        <p>ToDoList</p>
      </header>
      <p></p>
      <Todolist todo={todo} todos={todos} handleChange={handleChange} handleClick={handleClick}/>
      <p></p>
      <ReactTable data={todos} columns={columns} filterable={true}/>
    </div>
  );
}

export default App;
