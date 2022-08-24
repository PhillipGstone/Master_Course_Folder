// First install the react router dom package using the command npm install react-router-dom
// Then import the components below from the react-router-dom package
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import the components for each page - this example stores them in a folder called pages
import Home from './pages/home'; import About from './pages/about';
import './App.css'

const App = () => {

  return (
    <div>
      <h1>React Router Demo</h1>
      <BrowserRouter>
        {/* nav bar will get rendered on every page and NavLink is our styled component Link is the normal link imported from react-router-dom */}
        <nav>
          {/* <NavLink to="/">Home</NavLink> */}
          <Link to="/" className="NavButton">Home</Link>
          <Link to="/about" className="NavButton">About</Link>
        </nav><br/>
        {/* the Route is the url path and what component to render when the url is visited */}
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

// use styled components here at bottom of page insted of in a css file
// // how to style the link component using styled components
// const NavLink = styled(Link)`
//     background-color: green;
//     padding: 10px 20px;
//     margin: 10px;
// `
