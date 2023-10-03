import '../App.css';
import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";

function BookingForm({availableTimes, handleDateChange, submitForm}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("0");
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate()

    const getIsFormValid = () => date && guests >= 1 && time && occasion !== "";

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
                <label htmlFor="res-date">
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
                <label htmlFor="res-time">
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
                <label htmlFor="guests">
                Choose Guests <sup>*</sup>
                </label>
                <input
                    type="number"
                    id="guests"
                    data-testid="guests-input"
                    value={guests}
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
            <div className="Field">
                <label htmlFor="occasion">
                Choose Occasion <sup>*</sup>
                </label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    placeholder="Occasion"
                    aria-label="Select an Occasion"
                    aria-required="true"
                    required
                    >
                    <option value="" disabled>
                        Choose Occasion
                    </option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            </fieldset>
            <div class="button-container">
                <Link to="/"><button className="yellow-button longer">Back To Homepage</button></Link>
                <button type="submit" className="yellow-button longer" aria-label="On Click" onSubmit={handleSubmit} value="Make Your reservation" disabled={!getIsFormValid()}>
                    Make Your Reservation
                </button>
            </div>
    </form>
    </div>
    )
}

export default BookingForm;