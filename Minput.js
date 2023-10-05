





import React, { useState } from 'react';
import Button from './Button';
import './Minput.css';

const Minput = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [AgeenteredValue, setAgeEnteredValue] = useState('');
  const [CollegeenteredValue, setCollegeEnteredValue] = useState('');
  const [AddenteredValue, setAddEnteredValue] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsButtonDisabled(event.target.value.length < 6|| AgeenteredValue.length<6 ||CollegeenteredValue.length<6);
  };const AgeChangeHandler = (event) => {
    setAgeEnteredValue(event.target.value);
    setIsButtonDisabled(event.target.value.length < 6|| AgeenteredValue.length<6 ||CollegeenteredValue.length<6);
  };const CollegeChangeHandler = (event) => {
    setCollegeEnteredValue(event.target.value);
    setIsButtonDisabled(event.target.value.length < 6|| AgeenteredValue.length<6 ||CollegeenteredValue.length<6);
  };
  
    const addItems = () => {
      const newItem = {
        email: enteredValue,
        age: AgeenteredValue,
        college: CollegeenteredValue
      };
      setAddEnteredValue((prevItems) => [...prevItems, newItem]);
      setEnteredValue('');
      setAgeEnteredValue('');
      setCollegeEnteredValue('');
    };

  
 

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} className={`Form${!isButtonDisabled?'Invalid':'red'}`}>
      <div cladd>
        <label>Email</label>
        <input type="text" value={enteredValue} onChange={inputChangeHandler} /> 
         <label>Password</label>
        <input type="text" value={AgeenteredValue} onChange={AgeChangeHandler} /> 
         <label>College</label>
        <input type="text" value={CollegeenteredValue} onChange={CollegeChangeHandler} />
      </div>
      <Button type="submit" disabled={isButtonDisabled} onClick={addItems}>
        Submit
      </Button>
      {AddenteredValue.map((item, index) => (
        <div key={index}>
          <p>Email: {item.email}</p>
          <p>Age: {item.age}</p>
          <p>College: {item.college}</p>
        </div>
      ))}
    </form>
  );
};
export default Minput;
