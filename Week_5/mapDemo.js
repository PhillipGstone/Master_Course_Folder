import React from "react";

const App = () => {
  // array of names, can be stored in state but not needed here as I am not updating the array
  const names = [
    {
      fname: "Scooby",
      lname: "Doo"
    },
    {
      fname: "Mickey",
      lname: "Mouse"
    },
    {
      fname: "Mr",
      lname: "Bean"
    }
  ]

  // function to run on button click which logs index and first name to the console
  const handleClick = (personsInfo, index) => {
    console.log(`I am at ${index} index and I am ${personsInfo.fname}`);
  }

  return (
    <div>
      {/* map method goes through each object in names array and returns jsx for each item in the array */}
      {names.map((personsInfo, index) => {
        return (
          <div key={index}>
            <p>Person {index + 1}</p>
            <h1>I am {personsInfo.fname} {personsInfo.lname}</h1>
            <button onClick={() => handleClick(personsInfo, index)}>Who am I</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;