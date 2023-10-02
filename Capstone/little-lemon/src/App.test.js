import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/BookingForm"

describe("Boking Form", () => {
    test('Renders the BookingForm heading', () => {
      render(<BookingForm />);
      const headingElement = screen.getByText("Book Now");
      expect(headingElement).toBeInTheDocument();
  });
});

