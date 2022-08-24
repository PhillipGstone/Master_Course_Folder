import React, { useState, useEffect } from "react";
import './App.css'

const Api = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [films, setFilms] = useState([])

  // useEffect only runs once when component is first rendered
  useEffect(() => {
    // asynchronous function so we can wait for data to be fetched
    const fetchData = async () => {
      try {
        setErrorMsg('')
        // wait for fetch request from API endpoint and store rsponse in variable
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        
        // check to see if the response was successful otherwise throw error
        if(!response.ok){
          throw new Error(response.statusText)
        }
        // parse JSON response into normal javascript
        const data = await response.json();
        setFilms(data)
      } catch (error) {
        // catch an error that occurs in the try block
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
    // empty array makes sure useEffect only runs when component mounts and not when component re-renders. Loads once when page first loads.
  }, [])

  // display error message to user if something went wrong
  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div>
      <h1>Studio Ghibli API</h1>
      {/* map through data from API that is stored in the state */}
      {films.map((ghibliFilm, index) => {
        return (
          <div key={index} className="diffFilms">
            <p>{ghibliFilm.title}</p>
            <img src={ghibliFilm.image} alt="movie poster"/>
          </div>
        )
      })}
    </div>
  );
}

export default Api;