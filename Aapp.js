import React, { useState,useRef } from "react";
import ReactDOM from "react-dom";

const Aapp = () => {
  const nameInputRe=useRef()
  const AgeInputRe=useRef()
  const collegeInputRe=useRef()
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [college, setCollege] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }; 
  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(nameInputRe.current.value);
    console.log(AgeInputRe.current.value);
    console.log(collegeInputRe.current.value);
    const portalContainer = document.getElementById("portal-container");
    ReactDOM.createPortal(
      
      console.log(name+" "+age+" "+college),portalContainer
      
     
    );
  };

  return (
    <React.Fragment>
      <form>
        <div className="new-expense__controls">
          <div className="">
            <label>Name</label>
            <input type="text" value={name} onChange={handleNameChange} ref={nameInputRe}/><br/>
            <label>Age</label>
            <input type="number" onChange={handleAgeChange} ref={AgeInputRe}/><br/>
            <label>College Name</label>
            <input type="text" onChange={handleCollegeChange} ref={collegeInputRe}/>
            <button onClick={handleClick}>Add</button>
            <button>Cancel</button>
          </div>
        </div>
      </form>
      <div id="portal-container"></div>
    </React.Fragment>
  );
};

export default Aapp;