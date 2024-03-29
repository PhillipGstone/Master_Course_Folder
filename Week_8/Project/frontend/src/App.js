import './App.css';
import React, { useEffect, useState } from "react"

const App = () => {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="App">
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
