import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/BookingForm"

describe("Booking Form", () => {
    //validate that initializeTimes function returns the expected value
    test('Renders the BookingForm heading', () => {
      render(<BookingForm />);
      const headingElement = screen.getByText("Book Now");
      expect(headingElement).toBeInTheDocument();
  })

  it('should initialize availableTimes correctly', () => {
    const { getByText } = render(<Main />);
    // Assuming your initial times are displayed as options in the BookingForm component
    expect(getByText('17:00')).toBeInTheDocument();
    expect(getByText('18:00')).toBeInTheDocument();
    expect(getByText('19:00')).toBeInTheDocument();
  });

  it('should update availableTimes correctly', () => {
    const { getByTestId } = render(<Main />);
    const dateInput = getByTestId('date-table');

    // Simulate changing the date input
    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });

    // Assuming your updated times are displayed as options in the BookingForm component
    expect(getByTestId('time-input')).toHaveTextContent('Updated Times');
    // Adjust the selector and expectation based on your implementation
  });


});
