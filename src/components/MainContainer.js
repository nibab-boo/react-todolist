import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { useThemeContext, useThemeUpdateContext } from './ThemeContext';
import Header from "./Header"
import Cards from "./Cards"
import Form from './Form';


const MainContainer = () => {
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

  const deleteTodo = (data) => {
    todos.splice(todos.indexOf(data), 1);
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }
  // clicking delete
  const clickDelete = (data) => {
    if (data.done) {
      deleteTodo(data);
    } else {
      if (window.confirm("You have not completed the task. Do you want to delete it?")) {
        deleteTodo(data);
      } else {
        alert("That was close. Phew!!");
      }
    }
  }

  const dark = useThemeContext();
  const darkToggle = useThemeUpdateContext();
  console.log(dark);

  const changeToggle = (e) => {
    darkToggle();
    console.log(e);
    e.target.checked = dark;
  }


  return (
      <Router>
        <div className={`main-container ${ dark ? "dark" : ""}`}>
          <input type="radio" name="theme" className="theme-changer" value="true"  onClick={(e) => changeToggle(e)} />
          <div className='to-dos'>
            < Header />
            <Routes>
                <Route path="/react-todolist/add" element={ < Form
                  submitTodo= {onSubmit}
                />
                }/>
              <Route path="/react-todolist" exact element={
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
};

export default MainContainer;