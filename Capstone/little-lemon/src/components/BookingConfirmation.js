import '../App.css';
import bookingConfirmPic from "../img/restaurant.jpg"
import { Link} from "react-router-dom";



function BookingConfirmation({formData}) {
    const { date, time, guests, occasion } = formData;

    return (
        <div className="booking-confirmation">
            <img className="confirm-pic" src={bookingConfirmPic} alt="Little Lemon Restaurant indoors"></img>
            <h1>Confirmed! Thanks for booking.</h1>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guests}</p>
            <p>Occasion: {occasion}</p>
            <div class="button-container">
                <Link to="/"><button className="yellow-button longer">Back To Homepage</button></Link>
                <Link to="/reserve"><button className="yellow-button longer">Make Another Reservation</button></Link>

            </div>
        </div>
    )
}

export default BookingConfirmation;