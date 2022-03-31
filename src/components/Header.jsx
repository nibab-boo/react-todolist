import styled from 'styled-components';
import { FaPlus }from 'react-icons/fa'

const MainHeader = styled.div`
  // background: red;
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const ButtonPlus = styled.button`
  font-size: 1.2em;
  background: lightyellow;
  border: none;
  padding: 4px 8px;
  line-heigh  t: 100%;
  &:hover {
    background:red;
  }
`

const Header = () => {
  return (
    <MainHeader>
      <h1>TODO List</h1>
      <ButtonPlus>Add</ButtonPlus>
    </MainHeader>
  );
};

export default Header;