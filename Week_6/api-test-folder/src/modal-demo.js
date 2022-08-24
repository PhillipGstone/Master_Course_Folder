import { useState, useEffect } from 'react';
import Modal from './modal'
import './modal-style.css';

const ModalDemo = () => {
  const [animals, setAnimals] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState({});

  // getting data from API and stroing the returned array of objects in the state
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
          const data = await response.json()
          setAnimals(data)
      }
      fetchData()
  }, [])

  // function that updates the current selected animal and open modal
  const handleClick = (animalObj) => {
    setSelectedAnimal(animalObj)
    setShow(true)
  }

  // mapping over the API data and rendering the animal name and button to open modal
  return (
    <div>
      <h1>ANIMALS!!! - using custom made modal</h1>
      {animals.map((currentAnimal, index) => {
        return (
          <div key={index}>
            <h3>{currentAnimal.name}</h3>
            {/* onClick stores the selected animal object in the state */}
            <button onClick={() => handleClick(currentAnimal)}>Learn More</button>
          </div>
        )
      })}
      {/* modal is only rendered once but is passed different information depending on what animal is selected */}
      {show && <Modal closeModal={setShow} animal={selectedAnimal} />}
    </div>
  );
}

export default ModalDemo;