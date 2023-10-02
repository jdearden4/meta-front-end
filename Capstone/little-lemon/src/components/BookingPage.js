import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import {useState} from "react";


function BookingPage (){
    return (
        <>
        <div className="booking container">
            <BookingForm/>
        </div>
        </>
    )
}

export default BookingPage;