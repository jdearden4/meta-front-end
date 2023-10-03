import { Routes, Route } from 'react-router-dom';
import React, { useState, useReducer } from "react";
import Homepage from './HomePage';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import { isElement } from 'react-dom/test-utils';


function Main () {

    // Fake API
const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => (s = s * a % m) / m;
  };

    const fetchAPI = date => {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) result.push(i + ':00');
          if(random() < 0.5) result.push(i + ':30');
        }

        return result;
    };

    const submitAPI = formData => {
        return true;
    };

    const [formData, setFormData] = useState({})


      function initializeTimes() {
            // Get the current date
            const currentDate = new Date();

            // Use the fetchAPI function to fetch available times for today's date
            const timesForToday = fetchAPI(currentDate);
            // Return the times for today
            return timesForToday;
        }

      function updateTimes(state, action) {
        switch (action.type) {
          case 'update_times':
            const timesForSelectedDate = fetchAPI(action.selectedDate);
            return timesForSelectedDate;
          default:
            return state;
        }
    }
    const submitForm = (formData) => {
        if(submitAPI(formData)) {
            setFormData(formData);
        }
    }

    const handleDateChange = selectedDate => {
        const dateObject = new Date(selectedDate); // Convert the string to a Date object
        dispatch({ type: 'update_times', selectedDate: dateObject }); // Pass the selectedDate as an action parameter
      };


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reserve' element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} handleDateChange={handleDateChange} submitForm={submitForm} />} />
      {/* Only render BookingConfirmation when formData is available */}
        {formData && Object.keys(formData).length > 0 && (
            <Route path='/reserve/confirmation' element={<BookingConfirmation formData={formData} />} />
        )}
      </Routes>
    )
}

export default Main;

