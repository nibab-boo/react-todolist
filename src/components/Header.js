import styled from 'styled-components';
// import { FaPlus }from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

const MainHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`


const Header = () => {
  const location = useLocation();

  return (
    <MainHeader>
      <h1>TODO List</h1>
      { location.pathname === "/react-todolist/" ? (
        <Link className='add-close' to="/react-todolist/add">Add</Link>
        ) : (  
          <Link className='add-close' to="/react-todolist/">Close</Link>
        )
      }
    </MainHeader>
  );
};

export default Header;