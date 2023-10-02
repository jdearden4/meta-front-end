import { Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Homepage from './HomePage';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';


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
        <Route path='/reserve' element={<BookingPage />} />
        <Route index element={
        <BookingForm
            availableTimes={availableTimes} />}/>
      </Routes>
    )
}

export default Main;

