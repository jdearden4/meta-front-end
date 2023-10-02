import { Routes, Route } from 'react-router-dom';
import React, { useState, useReducer } from "react";
import Homepage from './HomePage';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import { isElement } from 'react-dom/test-utils';


function Main () {

    // const [availableTimes, setAvailableTimes] = useState([
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00"
    // ]);

    // const updateTimes = function() {
    //     return[
    //         "17:00",
    //         "18:00",
    //         "19:00",
    //         "20:00",
    //         "21:00"
    //     ];
    // }

    // const initializeTimes = (state, action) => {
    //     if(availableTimes =
    // }


      function initializeTimes() {
        return [
          "17:00",
          "18:00",
          "19:00",
          "julia sucks"
        ];
      }

      function updateTimes(state, action) {
        switch (action.type) {
          case 'update_times':
            return action.availableTimes;
          default:
            return state;
        }
    }

    const handleDateChange = (selectedDate) => {
        dispatch({ type: 'update_times', availableTimes: initializeTimes() });
      };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reserve' element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} handleDateChange={handleDateChange} />} />
        <Route path='/reserve/confirmation' element={<BookingConfirmation />} />
      </Routes>
    )
}

export default Main;

