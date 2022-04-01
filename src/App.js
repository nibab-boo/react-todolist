// import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from "./components/Header"
import Cards from "./components/Cards"
import Form from './components/Form';
// import styling
import './styles/App.scss'



function App() {
  // useEffect to get access to local Storages
 
  const [todos, setTodos] = useState([{
      title: "Take dog out for walk",
      done: true,
      date: "Tomorrow Morning"
    },{
      title: "Date night",
      done: false,
      date: "Tomorrow Night"
    }
  ]); 

  useEffect(() => {
    const todosList = localStorage.getItem("todos");
    if ( !todosList || !todosList.length ) {
      localStorage.setItem("todos", "[]");
    } else {
      console.log(todosList);
      setTodos(JSON.parse(todosList));
    }
  }, []);


  const onSubmit = (todo) => {
    // window.location.href = "/";
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }
  // before submit 
  
  // clicking done
  const clickDone = (data) => {
    todos.forEach((todo) => {
      if (todo.title === data.title) todo.done = true
    })
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }

  // clicking delete
  const clickDelete = (data) => {
    todos.splice(todos.indexOf(data), 1);
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }


  return (
    <Router>
    <div className='main-container'>
      <div className='to-dos'>
        < Header />
        <Routes>
            <Route path="/add" element={ < Form
              submitTodo= {onSubmit}
            />
            }/>
          <Route path="/" exact element={
            <>
              { todos.length > 0 ? (
                < Cards todos= { todos } onDone={ clickDone } onDelete={ clickDelete }/>
              ) : (
                "No TODOs to show."
                )}
            </>
          }/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}


export default App;
