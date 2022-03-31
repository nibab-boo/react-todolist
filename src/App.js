import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

`

const CardBox = styled.div`
  height: 300px;
  background: red;
  overflow-y: hidden;
`
const Card = styled.div`
  padding: 16px;
  font-size: 1.3em;
  font-weight: bold;  
  display: flex;
  justify-content: space-between;
  background: blue;

`


function App() {
  // useEffect to get access to local Storages
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosList = localStorage.getItem("todos");
    if ( !todosList || !todosList.length ) {
      localStorage.setItem("todos", "[]");
      setTodos("happy")
    } else {
      console.log(todosList);
      setTodos(JSON.parse(todosList));
    }
  }, []);

  return (
    <MainContainer>
      <ToDos>
        <h1>Todos list</h1>
        <CardBox>
          <Card>
            Hello
            <div>
              <button>del</button>
              <button>done</button>
            </div>
          </Card>
          <Card>
            Hello
            <div>
              <button>del</button>
              <button>done</button>
            </div>
          </Card>
          <Card>
            Hello
            <div>
              <button>del</button>
              <button>done</button>
            </div>
          </Card>
          <Card>
            Hello
            <div>
              <button>del</button>
              <button>done</button>
            </div>
          </Card>
          <Card>
            Hello
            <div>
              <button>del</button>
              <button>done</button>
            </div>
          </Card>
          <Card>
            Hello
            <div>
              <button>del</button>
              <button>done</button>
            </div>
          </Card>
          <Card>
            Hello
            <div>
              <button>del</button>
              <button>done</button>
            </div>
          </Card>
        </CardBox>
      </ToDos>
    </MainContainer>
  );
}

export default App;
