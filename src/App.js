import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// components
import Header from "./components/Header"
import Cards from "./components/Cards"

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ToDos = styled.div`
  width: 20vw;
  background: lightblue;
  padding: 16px;
  border-radius: 20px;
  min-height: 400px;

`
const Form = styled.form`
  padding: 0 24px 24px 0;
  .input-box {
    padding: 4px 0;
  }
  label {
    display: block;
  }
  input {
    width: 100%;
  }
  
`

function App() {
  // useEffect to get access to local Storages
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
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
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }
  // before submit 
  const beforeSubmit = (e) => {
    e.preventDefault();
    // console.log(  );
    onSubmit({title, date, done: false});
    setTitle("");
    setDate("");
  }

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
    <MainContainer>
      <ToDos>
        < Header />
        <Form onSubmit={ beforeSubmit }>
          <div className="input-box">
            <label  htmlFor="title">title</label>
            <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
          </div>
          <div className="input-box">
            <label  htmlFor="title">Date</label>
            <input type="datetime-local" name="date" value={date} onChange={(e)=> setDate(e.target.value)} value={date}></input>
          </div>
          <div style={{textAlign: "center"}}>
            <input type="submit" value="add"></input>
          </div>
        </Form>
        { todos.length > 0 ? (
          < Cards todos= { todos } onDone={ clickDone } onDelete={ clickDelete }/>
        ) : (
          "No TODOs to show."
        )}
      </ToDos>
    </MainContainer>
  );
}


export default App;
