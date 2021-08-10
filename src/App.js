import React, { createRef, useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const textInputRef = useRef(true);
  const numberInputRef = createRef();

  const handleTextInputRef = () => textInputRef.current.focus();
  const increaseCounter = () => {
    setCounter(counter + 1)
  };

  useEffect(
    () => {
      textInputRef.current.focus()
    }, []
  );


  return (
    <div>
      <input type="text" ref={textInputRef} />
      <input type="number" ref={numberInputRef} />
      <button onClick={handleTextInputRef}>Ustaw focus na input</button>
      <h2>{counter}</h2>
      <button onClick={increaseCounter}>Przerenderuj komponent</button>

    </div>
  );

}

export default App;
