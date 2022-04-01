import styled from 'styled-components';
import Card from './Card';
// style
const CardBox = styled.div`
  min-height: 100px;
`

const Cards = ({ todos, onDone, onDelete }) => {
  return (
    <CardBox>
      { todos.map( (todo) => < Card key={todo.title} todo={ todo } onDone={ onDone } onDelete={ onDelete }/>) }
    </CardBox>
  );
};

export default Cards;