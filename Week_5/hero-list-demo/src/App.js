import { useState } from 'react';
import './App.css';

const App = () => {
  // create state for favourite heroes and array to store all heroes in
  const [favourites, setFavourites] = useState([])
  const allHeroes = [
    {
      hero: "superman",
      info: "Superman was born on Krypton and is weak to green rocks",
      villain: "lex luthor"
    }, {
      hero: "mario",
      info: "Mario wears a cool red hat and blue overalls",
      villain: "bowser"
    }, {
      hero: "batman",
      info: "Batman is a rich orphan with a sore throat who fights crime",
      villain: "joker"
    }
  ]

  return (
    <>
      <h1>HERO INFORMATION</h1>
      {/* Render the Favourites component while passing the favourites state value and function to update favourites state value */}
      <div className="favSection">
        <h3>FAVOURITE HEROES:</h3>
        <Favourites addToFav={setFavourites} fav={favourites} />
      </div>
      {/* Map through allHeores array and render HeroCard component for each object in array, passing fav state values, function to update fav state, and heroArray */}
      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroInfoObject={heroInfo} addToFav={setFavourites} fav={favourites} />
      })}
    </>
  );
}

// Favourites Component
const Favourites = (props) => {

  // function removes item from favourite array by copying the array in the state, removing the item by the selected index, then updating the state to the new array
  const removeHandler = (index) => {
    let newFavArr = [...props.fav]
    newFavArr.splice(index, 1)
    props.addToFav(newFavArr)
  }

  return (
    <div className="favCardWrapper">
      {/* Map through the favourites array to display the heroes name and a delete button */}
      {props.fav.map((favHero, index) => {
        return (
          <div key={index} className="favCard">
            <p>{favHero}</p>
            <button onClick={() => removeHandler(index)}>x</button>
          </div>
        )
      })}
    </div>
  )
}

// Hero Card component
const HeroCard = ({ heroInfoObject, addToFav, fav }) => {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState(false);

  // creates copy of favourites array from state, adds a selected item to the favourites array, then updates state to new array
  const handleAddToFav = () => {
    let newFavArr = [...fav]
    newFavArr.push(heroInfoObject.hero)
    addToFav(newFavArr)
  }

  return (
    <>
      <p>HERO: {heroInfoObject.hero}</p>
      {/* show more information if show is true */}
      {show && 
        <div>
          <p>INFO: {heroInfoObject.info}</p>
          <p>VILLAIN: {heroInfoObject.villain}</p>
        </div>
      }
      <div className='buttons'>
      {/* change button text depending on if more info is displayed or not, and change show onClick */}
      <button onClick={() => setShow(!show)}>{show ? "LESS INFO" : "MORE INFO"}</button>
      {/* add hero to favourites array on click as wellas adding wobble class which runs animation, wobble class is removed when animation is finished */}
      <button 
        onClick={() => { handleAddToFav(); setAnimation(true) }}
        onAnimationEnd={() => setAnimation(false)}
        className={animation ? "wobble" : ""}
      >ADD TO FAVOURITES</button>
      </div>
    </>
  )
}

export default App;