/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const element = screen.getByText('Hello, World!');
  expect(element).toBeDefined();
});
