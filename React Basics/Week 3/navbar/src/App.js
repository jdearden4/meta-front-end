import './App.css';
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import {Routes, Route, Link} from 'react-router-dom';
import avatar from './assets/images/avatar.png'


function App() {
  // const randomImageUrl = "https://addimagehere"
  return (
    <div className="App">
      <nav className="app">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <img 
        height={200}
        src={avatar}
        alt='screenshot of background'
        />
        <img 
          height={200}
          src={require("./assets/images/avatar.png")}
          alt='another way'
          />
          {/* <img 
            height={200}
            src={randomImageUrl}
            alt='screenshot of background'
        /> */}
    </div>
  );
}

export default App;
