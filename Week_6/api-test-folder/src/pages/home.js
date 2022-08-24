import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Home = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [films, setFilms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMsg('')
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setFilms(data)
      } catch (error) {
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div>
      <DaButton color="white" background="green">
				Add
			</DaButton>
			<DaButton color="white" background="orange">
				Edit
			</DaButton>
			<DaButton color="white" background="red">
        delete
			</DaButton>
      <h1>Studio Ghibli API</h1>
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

export default Home;


export const DaButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 16px;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid ${(props) => props.background};
  border-radius: 3px;
  &:hover {
    background-color: black;
    color: ${(props) => props.background};
  }
`
