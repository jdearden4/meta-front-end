import '../App.css';

function BookingConfirmation({formData}) {
    const { date, time, guests, occasion } = formData;

    return (
        <div className="booking-confirmation">
            <h1>Confirmed! Thanks for booking.</h1>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guests}</p>
            <p>Occasion: {occasion}</p>
        </div>
    )
}

export default BookingConfirmation;