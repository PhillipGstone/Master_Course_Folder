// import the useState hook if you want to store values in the state
import React, { useState } from 'react';
import './App.css';

const App = () => {
  // store value in state, first is the state value (like a variable, the second is a function to update the state value
  const [toggle, setToggle] = useState(true);

  // If/else statement can have multiple else ifs but replaces all content in component when each return statement runs
  // if(toggle){
  //   return (
  //     <div>
  //       <h2>If/else statement</h2>
  //       <p>Toggle is true</p>
  //       <button onClick={() => setToggle(!toggle)}>Toggle</button>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <h2>If/else statement</h2>
  //       <p>Toggle is false</p>
  //       <button onClick={() => setToggle(!toggle)}>Toggle</button>
  //     </div>
  //   )
  // }

  return (
    <div>
      {/* using ternary operator to class applied to h1 */}
      <h1 className={toggle && 'funky'}>Hello World</h1>

      {/* onClick event runs anonymous function which updates the toggle state value to the opposite of its current value */}
      {/* using ternary operator to change text in button depending on state value */}
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide content' : 'Show Content'}</button>

      <h2>Ternary operator</h2>
      {/* Ternary operator changes content based on condition */}
      {toggle ? (
        <div>
          <h1>Hello, can you see me?</h1>
          <p>Some cool text</p>
        </div>
      ) : (
        <div>
          <h1>Goodbye</h1>
          <p>Some even cooler text</p>
        </div>
      )}

      <h2>Short circuit evaluation</h2>
      {/* Short circuit evaluation only displays content if condition is true, otherwise nothing is displayed */}
      {toggle && (
        <div>
          <h1>Short circuit evaluation</h1>
          <p>This only gets displayed if a condition is true</p>
        </div>
      )}

    </div>
  );
}

export default App;