import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
// import { useState } from 'react';
import "./../styles/card.scss"
// styled components
 

const Card = ({ todo, onDone, onDelete }) => {
  return (
    <div className={`card-box ${todo.done ? "done" : ""}`}>
      <div className="card-info">
        <h4>{todo.title}</h4>
        <p>{todo.date}</p>
      </div>

        { !todo.done && (
          < FaCheck data-type="done" style={{ }} onClick={ ()=> onDone(todo) } />
          ) 
        }
        < FaTrash data-type="delete" style={{ color: "red", marginLeft: "0px"}} onClick={ ()=> onDelete(todo) } />
    </div>
  );
};



export default Card;