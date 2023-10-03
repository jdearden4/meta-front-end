import '../App.css';
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({availableTimes, handleDateChange, submitForm}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("0");
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate()

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            time, 
            guests,
            occasion
        };

        submitForm(formData);

        console.log("Reservation created!");
        navigate('/reserve/confirmation')
        clearForm()
    };

    const handleDateChangeUpdate = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    handleDateChange(selectedDate);
  };

    console.log("Available Times:", {availableTimes});

    return (
    <div>
    <form className="BookingForm booking-form" onSubmit={handleSubmit}>
        <h1>Book Now</h1>
        <fieldset>
            <div className="Field">
                <label for="res-date">
                Choose Date <sup>*</sup>
                </label>
                <input
                    id="res-date"
                    data-testid="date-table"
                    type="date"
                    value={date}
                    onChange={handleDateChangeUpdate}
                    placeholder="Choose date"
                    aria-label="Choose a date"
                    aria-required="true"
                    required

                />
            </div>
            <div className="Field">
                <label for="res-time">
                Choose Time <sup>*</sup>
                </label>
                <select
                    id="res-time"
                    data-testid="time-input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    aria-label="Select a time"
                    aria-required="true"
                    required

                >
                <option value="">Choose Time</option>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>
            </div>
            <div className="Field">
                <label for="guests">
                Choose Guests <sup>*</sup>
                </label>
                <input
                    type="number"
                    id="guests"
                    data-testid="guests-input"
                    value={guests.value}
                    onChange={(e) => {
                        setGuests(e.target.value);
                    }}
                    placeholder="1"
                    min="1"
                    max="10"
                    aria-label="Number of guests"
                    aria-required="true"
                    required

                />
            </div>
            <div className="Occasion">
                <label for="occasion">
                Occasion <sup>*</sup>
                </label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    aria-label="Select an Occasion"
                    aria-required="true"
                    required
                    placeholder="Occasion"

                    >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type="submit" onSubmit={handleSubmit} value="Make Your reservation">
            Make Your Reservation
            </button>
        </fieldset>
    </form>
    </div>
    )
}

export default BookingForm;