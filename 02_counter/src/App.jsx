import { useState } from "react";
import "./App.css";

function App() {

  // counter refers to current state & setCounter is function to update it
  const [counter, setCounter] = useState(15);
  // const [isDisabled, setDisabled] = useState(false);

  const addValue = () => {
    // setCounter(prevCounter => prevCounter + 1)  //this syntax is good and can increment the 
    if(counter < 20)                           // previous value by constant mentioned here 1.
      setCounter(counter + 1)
    // else
    //   setDisabled(true)
  }

  const removeValue = () => {
    if(counter > 0)
      setCounter(counter - 1)
    // else  
    //   setDisabled(true)
  }

  return (
    <>
      <h1>Learn React</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
        onClick={addValue} 
        // disabled = {isDisabled}
      >Add Value {counter}</button>

      <br />
      <button 
        onClick={removeValue}
        // disabled = {isDisabled}
        >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
