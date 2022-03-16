/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import PrimeForm from './PrimeForm';

test('renders content', () => {
  render(<PrimeForm />);

  const element = screen.getByText('Select action above');
  expect(element).toBeDefined();

  const checkprime = screen.getByText('Checkprime');
  expect(checkprime).toBeDefined();

  const sumandcheck = screen.getByText('Sumandcheck');
  expect(sumandcheck).toBeDefined();

});