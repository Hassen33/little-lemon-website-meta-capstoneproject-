import React from 'react';
import BookingFrom from './BookingForm';

const Booking = (props) => {
    return (
        <BookingFrom availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
    );
};

export default Booking;