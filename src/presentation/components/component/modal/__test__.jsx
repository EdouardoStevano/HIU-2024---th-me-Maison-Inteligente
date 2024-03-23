import React from 'react';
import { render, screen } from '@testing-library/react';
import HowToUse from './howToUse';

test('renders MyModal and MyModalLarge components', () => {
  render(<HowToUse />);
  const myModal = screen.getByText('Modal Standard');
  expect(myModal).toBeInTheDocument();
  const myModalLarge = screen.getByText('Modal Large');
  expect(myModalLarge).toBeInTheDocument();
});