import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a link that points to little lemon webpage', () => {
  //render APP in artificial dom
  render(<App />);
  //ask body tagif it can find the text learn react and if it can, it'll return the found element
  const linkElement = screen.getByText("little lemon restaurant");
    //assertion from query above is present in the doc (whether it's visible on screen)
    //recieves query result and appends a specific matcher (in this case, lement visibel in the whole document)

  expect(linkElement).toBeInTheDocument();
});
