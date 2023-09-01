import Heading from "./components/Heading";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import "./App.css"
import avatar from './avatar.png';

function Logo(props) {
  const userPic = <img src={avatar}/>;
  return userPic;
}

function App() {
  return (
    <div className="App">
      <Heading name="Anna" color="purple" />
      <Main greet="Howdy" />
      <Sidebar greet="hi"/>
      <Nav first="Home" />
      <Logo/>
    </div>
  );
}

export default App;
