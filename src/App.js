// import styled from 'styled-components';

// components
import {ThemeProvider } from './components/ThemeContext';
import MainContainer from './components/MainContainer';
// import styling
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // useEffect to get access to local Storages
 
  
  return (
    <ThemeProvider>
      < MainContainer  />
    </ThemeProvider>
  );
}


export default App;
