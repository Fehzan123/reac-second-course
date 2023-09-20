import React, { useState } from "react";
import './Form.css';

const Form2 = () => {
  const [input, setinput] = useState("");
  const [Item, setItem] = useState([]);

  const changeInp = (e) => {
    setinput(e.target.value);
  }

  const AddItem = () => {
    setItem((olitem)=>{
return [...olitem,input];
    })
    setinput("");
  }

  return (
    <div>
      <label>Add Course</label>
      <input type="text" onChange={changeInp} />
      <button onClick={AddItem}>Add</button>
      {Item.map((Itemval) => {
        return <li>{Itemval}</li>;
      })}
    </div>
  )
}

export default Form2;
