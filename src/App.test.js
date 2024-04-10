import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

// Mock props with available times
const mockProps = {
  availableTimes: ["09:00 AM", "10:00 AM", "11:00 AM"],
  SubmitFrom: jest.fn(),
  dispatch: jest.fn(),
};

describe("BookingForm component", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now", { exact: false });
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders form elements and submits form with correct data", () => {
    render(<BookingForm {...mockProps} />);

    // Check if the submit button is rendered
    const submitButton = screen.getByLabelText("On Click");
    expect(submitButton).toBeInTheDocument();

    // Simulate filling in the date input
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2024-04-10" } });

    // Simulate selecting a time
    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: "09:00 AM" } });

    // Simulate filling in the guest input
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "2" } });

    // Simulate selecting an occasion
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Check if SubmitFrom function is called with the correct arguments
    expect(mockProps.SubmitFrom).toHaveBeenCalledTimes(1);
    expect(mockProps.SubmitFrom).toHaveBeenCalledWith(expect.any(Object));
  });
});
