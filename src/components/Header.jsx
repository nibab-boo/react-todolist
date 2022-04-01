import styled from 'styled-components';
// import { FaPlus }from 'react-icons/fa'
import { Link } from 'react-router-dom';

const MainHeader = styled.div`
  // background: red;
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const linkStyle = {
  fontSize: "1.2em",
  background: "lightyellow",
  border: "none",
  padding: "4px 8px",
  lineHeight: "100%",
  textDecoration: "none"
}


const Header = () => {
  return (
    <MainHeader>
      <h1>TODO List</h1>
      <Link style={linkStyle} to="/add">Add</Link>
    </MainHeader>
  );
};

export default Header;