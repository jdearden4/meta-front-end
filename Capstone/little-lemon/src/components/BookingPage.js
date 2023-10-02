import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import {useState} from "react";


const BookingPage = (props) => {
    return (
        <>
        <div className="booking container">
            <BookingForm/>
        </div>
        </>
    )
}

export default BookingPage;