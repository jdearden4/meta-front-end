import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/BookingForm"
import Main from "./components/Main"



describe("Booking Form", () => {
    //validate that initializeTimes function returns the expected value
    test('Renders the BookingForm heading', () => {
      render(<BookingForm />);
      const headingElement = screen.getByText("Book Now");
      expect(headingElement).toBeInTheDocument();
  })

  // Test initializeTimes function
test('initializeTimes returns the expected value', () => {
  // Call the initializeTimes function
  const result = initializeTimes();

  // Define the expected result (based on your logic in the component)
  const expectedTimes = [
    "17:00",
    "17:30",
    "18:00",
    // ... add other expected times based on your logic
  ];

  // Use Jest's expect function to compare the result with the expected value
  expect(result).toEqual(expectedTimes);
});

// Test updateTimes function
test('updateTimes returns the same value as provided in state', () => {
  // Define a sample state and action
  const initialState = ["17:00", "18:00", "19:00"];
  const action = { type: 'update_times', availableTimes: ["16:00", "16:30"] };

  // Call the updateTimes function with the state and action
  const result = updateTimes(initialState, action);

  // The result should be the same as the availableTimes in the action
  expect(result).toEqual(action.availableTimes);
});


});
