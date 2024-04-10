import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    // Define the available times array
const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={props.dispatch}
        SubmitForm={props.SubmitForm}
      />
    </>
  );
};

export default Booking;
