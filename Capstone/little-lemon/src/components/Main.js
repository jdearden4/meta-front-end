import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

function Main () {
    const [availableTimes, setAvailableTimes] = useState(
        ["17:00"],
        ["18:00"],
        ["19:00"],
        ["20:00"],
        ["21:00"],
    );

  return (
    <div>
        {/* <Routes> */}
            {/* <Route path='/' element={<HomePage/>}></Route> */}
            {/* <Route path='/reserve'
                element={<BookingPage
                availableTimes={availableTimes}/>}>
            </Route> */}
        {/* </Routes> */}
        {/* pass availableTimes as a prop to BookingForm */}
        <BookingForm availableTimes={availableTimes}/>
    </div>
  );
}

export default Main;