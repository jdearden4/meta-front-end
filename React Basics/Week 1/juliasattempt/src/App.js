import './App.css';
import './Global.css';
import './Nav.css';
import './Header.css';
import './Body.css';
import './Footer.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav 
          nav1='Home' nav1Url='index.html' 
          nav2='Nav 2 Placeholder' nav2Url='https://www.google.com' 
          nav3='Nav 3 Placeholder' nav3Url='https://www.gmail.com'
        />
        <Hero header='React App' subheader='My first attempt at a React web app!'/>
      </header>
      <Body content='This is my starter website with React. I think it is looking good so far!'/>
      <Footer 
          footer1='Portfolio' footer1Url='https://www.juliadearden.com'
          footer2='LinkedIn' footer2Url='https://www.linkedin.com/in/julia-dearden/'
          footer3='Github'  footer3Url='https://github.com/jdearden4'
      />
    </div>
  );
}

export default App;
