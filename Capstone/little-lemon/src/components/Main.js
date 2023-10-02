import { Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Homepage from './HomePage';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';


function Main () {

    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        //etc.
    ]);

    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reserve' element={<BookingForm availableTimes={availableTimes} />} />
        <Route path='/reserve/confirmation' element={<BookingConfirmation />} />
      </Routes>
    )
}

export default Main;

