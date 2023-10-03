import BookingForm from "./components/BookingForm"
import Main from "./components/Main"
import { Routes, Route } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';




describe("Booking Form", () => {
    //validate that initializeTimes function returns the expected value
    it('Test for static text being rendered in the BookingForm component', () => {
      render(<BookingForm />);
      const labelElement = screen.getByText('res-date')
      expect(labelElement).toBeInTheDocument();
    })

  // Test initializeTimes function
    test('initializeTimes returns the expected value', () => {
      render(<Main />);
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


  it('verify validate the form input fields.', () => {
    const submitForm = jest.fn()
    const dispatch = jest.fn()
    const { getByTestId } = render(
      <BrowserRouter>
        <ReserveForm submitForm={submitForm} dispatch={dispatch} />
      </BrowserRouter>
    )

    const inputDate = screen.getByTestId('date-input');
    const inputGuest = screen.getByTestId('guests-input');
    const inputTime = screen.getByTestId('time-input');
    const button = screen.getAllByText('Make Your reservation');

    fireEvent.mouseDown(inputDate)
    fireEvent.change(inputDate, { target: { value: '2023-10-18' }})
    fireEvent.mouseDown(inputGuest)
    fireEvent.change(inputGuest, { target: { value: 20 }});

    expect(inputTime).toBeEnabled()
    expect(button).toBeEnabled()

    fireEvent.submit(getByTestId('form'));

    expect(submitForm).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
  })

});
