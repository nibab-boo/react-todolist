import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
// import { useState } from 'react';
import "./../styles/card.css"
// styled components
 

const Card = ({ todo, onDone, onDelete }) => {
  return (
    <div className='card-box'>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.date}</p>
      </div>
      { todo.done ? (
        < FaTrash style={{ color: "red"}} onClick={ ()=> onDelete(todo) } />
        ) : (
          < FaCheck style={{ }} onClick={ ()=> onDone(todo) } />
        )
      }
    </div>
  );
};



export default Card;