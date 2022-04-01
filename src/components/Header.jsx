import styled from 'styled-components';
// import { FaPlus }from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

const MainHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const linkStyle = {
  
}


const Header = () => {
  const location = useLocation();

  return (
    <MainHeader>
      <h1>TODO List</h1>
      { location.pathname === "/" ? (
        <Link className='add-close' style={linkStyle} to="/add">Add</Link>
        ) : (  
          <Link className='add-close' style={linkStyle} to="/">Close</Link>
        )
      }
    </MainHeader>
  );
};

export default Header;