import '../App.css';
import {useState} from "react";

function BookingForm(availableTimes) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <h1>Book Now</h1>
        <fieldset>
            <div className="Field">
                <label for="res-date">
                Choose Date <sup>*</sup>
                </label>
                <input
                    id="res-date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                    placeholder="Choose date"
                />
            </div>
            <div className="Field">
                <label for="res-time">
                Choose Time <sup>*</sup>
                </label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="time">Choose a Time</option>
                        {availableTimes.map((availableTimes) => (
                            <option key={availableTimes}>{availableTimes}</option>
                        ))}
                </select>
            </div>
            <div className="Field">
                <label for="guests">
                Choose Guests <sup>*</sup>
                </label>
                <input
                    type="Number"
                    id="guests"
                    value={guests}
                    onChange={(e) => {
                        setGuests(e.target.value);
                    }}
                    placeholder="1"
                    min="1"
                    max="10"
                />
            </div>
            <div className="Occasion">
                <label for="occasion">
                Occasion <sup>*</sup>
                </label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option value="occasion">Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type="submit" value="Make Your reservation">
            Make Your Reservation
            </button>
        </fieldset>
    </form>
    )
}

export default BookingForm;