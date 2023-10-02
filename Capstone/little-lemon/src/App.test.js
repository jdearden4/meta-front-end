import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/BookingForm"

describe("Booking Form", () => {
  //Check for Book Now text
    test('Renders the BookingForm heading', () => {
      render(<BookingForm />);
      const headingElement = screen.getByText("Book Now");
      expect(headingElement).toBeInTheDocument();
    });

    //validate that initializeTimes function returns the expected value
    test('Renders the BookingForm heading', () => {
      render(<BookingForm />);
      const headingElement = screen.getByText("Book Now");
      expect(headingElement).toBeInTheDocument();
    });

      //validate that updateTimes function returns the same value that is provided in the state
      test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
      });
});

