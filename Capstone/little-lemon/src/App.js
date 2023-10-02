import './App.css';
import Homepage from "./components/HomePage";
import Reservations from "./components/BookingPage";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";





function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/reserve"
         element={<Reservations/>}/>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
