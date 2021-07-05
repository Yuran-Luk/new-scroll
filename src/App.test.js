import { render, screen } from '@testing-library/react';
import Dev from './Dev';

test('renders learn react link', () => {
  render(<Dev />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
