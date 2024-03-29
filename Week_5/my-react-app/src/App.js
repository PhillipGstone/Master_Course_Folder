import Reactlogo from './images/logo192.png'; import react, {useState} from "react";
import pic1 from './images/pic1.png'; import pic2 from './images/pic2.png'; import pic3 from './images/pic3.png'; import pic4 from './images/pic4.png';
import picture1 from './images/1pic.png'; import picture2 from './images/2pic.png'; import picture3 from './images/3pic.png'; import picture4 from './images/4pic.png';
import image1 from './images/image1.png'; import image2 from './images/image2.png'; import image3 from './images/image3.png'; import image4 from './images/image4.png';
import './App.css'; // This is how you link your CSS

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  return (
    <div className="App">
      <div className='Main-page'>
      <img src={Reactlogo} className="App-logo" alt="logo" />
      <button className='button' onClick={() => setToggle3(!toggle3)}>{toggle3 ? 'Change colour to white' : 'Change colour to purple'}</button>
        <h1 className={toggle3 && 'wordChange'}>Hello World</h1>
        {/* <h2>I'm a root component</h2> */}
        <button className='button' onClick={() => setToggle2(!toggle2)}>{toggle2 ? '1st content' : '2nd Content'}</button>
        {toggle2 ? (
          <div>
            <h1>You can see this, right?</h1>
            <p>That is cool!!!</p>
          </div>
        ) : (
          <div>
            <h1>I am hidden untill clicked</h1> 
            <p>cool!!!</p>
          </div>
        )}
        <button className='button' onClick={() => setToggle(!toggle)}>{toggle ? 'Hide content' : 'Show Content'}</button>
        {toggle && (
        <div>
          <h1>Short circuit evaluation</h1>
          <p>This only gets displayed if a condition is true</p>
        </div>
        )}
        <div className='pictureDiv'>
          <img src={pic1} alt="image1" className='image'/>
          <img src={pic2} alt="image2" className='image'/>
          <img src={pic3} alt="image3" className='image'/>
          <img src={pic4} alt="image4" className='image'/>
        </div>
        <div className='pictureDiv'>
          <img src={image1} alt="image1" className='image'/>
          <img src={image2} alt="image2" className='image'/>
          <img src={image3} alt="image3" className='image'/>
          <img src={image4} alt="image4" className='image'/>
        </div>
        <div className='pictureDiv'>
          <img src={picture1} alt="image1" className='image'/>
          <img src={picture2} alt="image2" className='image'/>
          <img src={picture3} alt="image3" className='image'/>
          <img src={picture4} alt="image4" className='image'/>
        </div>
        <Person />
        <PersonProp name="Dan" age="34" type="dog" petName="Mr fluffles"/>
        <PersonProp name="Ben" age="21" type="cat" petName="Wiskers"/>
        
      </div>

    </div>
  );
}


const Person = () => { // Hard coded
  return ( // Need () for multible lines. Wrap it in a div coz can only have 1 perent 
    <div>
      <h3>Sub title</h3>
      <p>Hello I'm a p tag</p>
    </div>
  )
}

const PersonProp = (props) => { // Dynamic
  return (
    <div>
      <p>Hello I'm {props.name} and I'm {props.age}</p>
      <Pet type={props.type} petName={props.petName}/>
    </div>
  );
};

const Pet = (props) => {
  return (
    <div>
      <p>I have a {props.type}, called {props.petName}.</p>
    </div>
  )
}


export default App;
