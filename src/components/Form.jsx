import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const FormBox = styled.form`
  padding: 0 24px 24px 0;
  .input-box {
    padding: 4px 0;
  }
  label {
    display: block;
  }
  input {
    width: 100%;
  }
  
`

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
    <FormBox onSubmit={ beforeSubmit }>
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
    </FormBox>
  );
};

export default Form;