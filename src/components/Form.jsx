import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form as BootForm } from "react-bootstrap";
import { Button } from 'react-bootstrap';

const Form = ({ submitTodo }) => {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const beforeSubmit = (e) => {
    e.preventDefault();
    // console.log(  );
    submitTodo({title, date, done: false});
    navigate(-1);
    console.log("working");
    setTitle("");
    setDate("");
  }

  return (
    <>
    <BootForm onSubmit={ beforeSubmit }>
      <BootForm.Group className="mb-3" controlId="BootFormBasicTitle">
        <BootForm.Label>Title</BootForm.Label>
        <BootForm.Control type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter to do thing." />
      </BootForm.Group>
      <BootForm.Group className="mb-3" controlId="BootFormBasicdate">
        <BootForm.Label>Date</BootForm.Label>
        <BootForm.Control type="datetime-local" value={date} onChange={(e)=> setDate(e.target.value)}/>
      </BootForm.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" size="sm" type="submit">Create To-DO</Button>
      </div>
    </BootForm>
    {/* <form className="form-box" onSubmit={ beforeSubmit }>
      <div className="input-box">
        <label  htmlFor="title">title</label>
        <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
      </div>
      <div className="input-box">
        <label  htmlFor="title">Date</label>
        <input type="datetime-local" name="date" value={date} onChange={(e)=> setDate(e.target.value)}></input>
      </div>
      <div style={{textAlign: "center"}}>
        <input type="submit" value="add"></input>
      </div>
    </form> */}
    </>
  );
};

export default Form;